import Comic from '../Comic';
import styles from './index.module.css';

export default function ComicCarousel({ comics, className }) {
  return (
    <div className={[styles.carousel, className].join(' ')}>
      {Object.entries(comics).map(([k, { title, year, image }]) => (
        <Comic key={k} title={title} year={year} image={image} />
      ))}
    </div>
  );
}
