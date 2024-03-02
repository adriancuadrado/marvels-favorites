import Image from 'next/image';
import styles from './page.module.css';
import Heart from '@/components/Heart';
import ComicCarousel from '@/components/ComicCarousel';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Image
          src='/test-image.png'
          alt='Hero'
          width={320}
          height={320}
          priority
        />
        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>ADAM WARLOCK</h1>
            <Heart />
          </div>
          <p>
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
