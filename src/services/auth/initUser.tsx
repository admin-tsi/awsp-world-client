import axios from 'axios';

async function getUserInfo(token: any) {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || '';
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  try {
    const url = `${baseUrl}/auth/verify-token`;
    const response = await axios.get(url, { headers });
    if (response.status === 200) {
      localStorage.setItem('token', token);
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

export default getUserInfo;
