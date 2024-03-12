import AuthAPI from '@/services/auth/initUser';
import router from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext<{ token: string | null; userInfo: any }>({
  token: null,
  userInfo: null,
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const { value, expiry } = JSON.parse(storedToken);

          if (expiry && new Date().getTime() > expiry) {
            localStorage.removeItem('token');
            return null;
          }
          return value;
        } catch (error) {
          console.error(
            'Erreur lors de la récupération du token du localStorage:',
            error
          );
          localStorage.removeItem('token');
          return null;
        }
      }
    }
    return null;
  });

  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (token) {
      initUser(token);
    }
  }, [token]);

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      if (token) {
        refreshToken(token);
      }
    }, 40 * 60 * 1000);
    return () => clearInterval(refreshTokenInterval);
  }, [token]);

  const initUser = async (token: string) => {
    try {
      const userInfo = await AuthAPI.getUserInfo(token);
      if (userInfo) {
        setUserInfo(userInfo);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'initialisation de l'utilisateur :",
        error
      );
      router.push('/');
    }
  };

  const refreshToken = async (token: string) => {
    try {
      const newInfo = await AuthAPI.refreshUserInfo(token);
      if (newInfo) {
        setToken(newInfo.token);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du token :', error);
      router.push('/');
    }
  };

  const value = { token, userInfo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
