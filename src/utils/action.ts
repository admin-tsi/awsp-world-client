import { redirect } from 'next/navigation';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 hours from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  try {
    const sessionCookie = cookies().get('session');
    if (!sessionCookie) {
      return null;
    }
    const session = sessionCookie.value;
    if (typeof session !== 'string') {
      throw new Error('Session is not a string');
    }
    const cookiesToken = await decrypt(session);
    return cookiesToken;
  } catch (error) {
    console.error('An error occurred while getting session:', error);
    throw error;
  }
}
