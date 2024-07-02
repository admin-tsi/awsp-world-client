import axios from 'axios';

async function getUserInfo(token: any) {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || '';
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const url = `${baseUrl}/auth/verify-token`;
    const redirectUrl = process.env.NEXT_PUBLIC_AWSP_AFRICA_URL;
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem('token', JSON.stringify({ value: token, expiry }));
      return response.data;
    } else {
      console.error(
        `Erreur lors de la récupération des informations de l'utilisateur : ${response.status}`
      );
      return null;
    }
  } catch (error: any) {
    console.error(
      `Erreur lors de la récupération des informations de l'utilisateur : ${error.message}`
    );
    return null;
  }
}

async function refreshUserInfo(token: any) {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || '';
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const url = `${baseUrl}/auth/refresh-token`;
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem(
        'token',
        JSON.stringify({ value: response.data.token, expiry })
      );
      return response.data;
    } else {
      console.error(
        `Erreur lors de la récupération des informations de l'utilisateur : ${response.status}`
      );
      return null;
    }
  } catch (error: any) {
    console.error(
      `Erreur lors de la récupération des informations de l'utilisateur : ${error.message}`
    );
    return null;
  }
}

function logout() {
  const redirectUrl = process.env.NEXT_PUBLIC_AWSP_AFRICA_URL;

  if (typeof redirectUrl === 'string') {
    localStorage.removeItem('token');
    window.location.href = redirectUrl;
  } else {
    console.error('Redirect URL is not defined');
  }
}

const AuthAPI = {
  getUserInfo,
  refreshUserInfo,
  logout,
};

export default AuthAPI;
