import styles from './index.module.css';

export default ({ title, year, image }) => (
  <div className={styles.comic}>
    <img src={image} alt={title} className={styles.image} />
    <span className={styles.title}>{title}</span>
    {!isNaN(year) && <span className={styles.year}>{year}</span>}
  </div>
);
