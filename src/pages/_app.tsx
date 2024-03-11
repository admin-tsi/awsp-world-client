import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sairaFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
