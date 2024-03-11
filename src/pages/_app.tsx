import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const sairaFont = localFont({
  variable: '--saira-font',
  display: 'swap',
  src: [
    {
      path: '../fonts/Saira-VariableFont_wdth,wght.ttf',
      weight: 'variable',
    },
  ],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Component {...pageProps} className={`${sairaFont.variable} font-sans`} />
  );
}
