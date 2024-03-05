import styles from './page.module.css';
import ComicCarousel from '@/components/ComicCarousel';
import { getCharacter, getCharacterComics } from '@/api';
import getServerSideQueryParams from '@/utils/getServerSideQueryParams';
import Banner from '@/components/Banner';

export default async function Page({ params: { id } }) {
  const { name, description, imagePath, imageExtension } = (
    await getCharacter(id, getServerSideQueryParams())
  )[id];
  const comics = await getCharacterComics(id, getServerSideQueryParams());
  return (
    <main className={styles.main}>
      <Banner
        image={`${imagePath}/portrait_uncanny.${imageExtension}`}
        name={name}
        description={description}
      />
      <h2 className={styles.subtitle}>COMICS</h2>
      <ComicCarousel comics={comics} className={styles.carousel} />
    </main>
  );
}
