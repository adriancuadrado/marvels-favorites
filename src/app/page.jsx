import Results from '@/components/Results';
import Search from '@/components/Search';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FAVORITES</h1>
      <Search />
      <Results />
    </main>
  );
}
