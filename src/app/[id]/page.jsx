import { headers } from 'next/headers';
import Image from 'next/image';
import styles from './page.module.css';
import Heart from '@/components/Heart';
import ComicCarousel from '@/components/ComicCarousel';
import isMobile from '@/utils/isMobile';

export default function Page() {
  console.log(headers().get('User-Agent'));
  const isMobileDevice = isMobile();
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Image
          className={styles.picture}
          src='/test-image.png'
          alt='Hero'
          width={isMobileDevice ? 393 : 320}
          height={isMobileDevice ? 397.89 : 320}
          priority
        />
        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>ADAM WARLOCK</h1>
            <Heart />
          </div>
          <p className={styles.text}>
            Created by the Enclave to be part of a race of super humans who
            would abolish war, illness, and crime, Adam Warlock is a unique
            being who uses his immense and formidable powers to safeguard the
            universe.
          </p>
        </div>
      </div>
      <h2 className={styles.subtitle}>COMICS</h2>
      <ComicCarousel className={styles.carousel} />
    </main>
  );
}
