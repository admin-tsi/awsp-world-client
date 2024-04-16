import AuthAPI from '@/services/auth/initUser';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('t');
  const setStoreToken = useBearStore((state) => state.setToken);
  const redirectUrl = process.env.NEXT_PUBLIC_AWSP_AFRICA_URL;

  useEffect(() => {
    if (token) {
      console.log(token);
      authen(token);
      setStoreToken(token);
    }
  }, [token]);

  const authen = async (token: string) => {
    try {
      const userInfo = await AuthAPI.getUserInfo(token);
      if (userInfo) {
        router.push('/microcredentials');
      } else {
        router.push('/error');
      }
    } catch (error) {
      router.push('/error');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center space-x-3">
      <Loading />
      <span className="text-white text-xl">Loading...</span>
    </div>
  );
}
