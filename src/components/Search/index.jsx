import Image from 'next/image';
import styles from './index.module.css';

export default () => (
  <div className={styles.searchWithResults}>
    <div className={styles.search}>
      <Image
        src='/magnifying-glass.svg'
        alt='Magnifying glass'
        width={12}
        height={12}
        priority
      />
      <input
        type='search'
        className={styles.inputSearch}
        placeholder='Search a character...'
      />
    </div>
    <span className={styles.results}>50 RESULTS</span>
  </div>
);
