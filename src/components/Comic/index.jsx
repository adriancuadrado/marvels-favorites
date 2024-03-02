import Image from 'next/image';
import styles from './index.module.css';

export default () => (
  <div className={styles.comic}>
    <Image
      className={styles.picture}
      src='/test-image-2.png'
      width={179.2}
      height={268.8}
    />
    <span className={styles.title}>
      Who is...? Adam Warlock Infinity Comic #1
    </span>
    <span className={styles.year}>1967</span>
  </div>
);
