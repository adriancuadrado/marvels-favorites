import styles from './layout.module.css';

import { Roboto_Condensed } from 'next/font/google';
import Heart from '@/components/Heart';
import Logo from '@/components/Logo';

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
        <header className={styles.header}>
          <Logo />
          <div className={styles.favorites}>
            <Heart />
            <span className={[styles.heartCount].join(' ')}>3</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
