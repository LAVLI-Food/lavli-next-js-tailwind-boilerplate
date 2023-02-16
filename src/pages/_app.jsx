import { Mulish } from '@next/font/google';
import '@/styles/globals.css';

const mulish = Mulish({
  weight: ['400', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
});

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={`${mulish.variable} font-sans`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
