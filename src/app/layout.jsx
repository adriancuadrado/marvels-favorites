import '@/app/global.css';
import styles from './layout.module.css';

import { Roboto_Condensed } from 'next/font/google';
import Logo from '@/components/Logo';
import Link from 'next/link';
import FavoritesProvider from '@/state/favorites/Provider';
import HeartCounter from '@/components/HeartCounter';

export const metadata = {
  title: 'Zara Web Challenge',
  description: 'Prueba técnica de Zara desarrollada por Adrián Cuadrado',
};

// If loading a variable font, you don't need to specify the font weight
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={[robotoCondensed.className, styles.html].join(' ')}
    >
      <body className={styles.body}>
        <FavoritesProvider>
          <header className={styles.header}>
            <Link href='/'>
              <Logo />
            </Link>
            <Link href='/favorites'>
              <HeartCounter />
            </Link>
          </header>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
