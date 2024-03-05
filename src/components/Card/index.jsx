import styles from './index.module.css';
import Heart from '../Heart';
import { EMPTY_THICK, FULL } from '../Heart/constants';

export default ({ image, name, fullHeart, onClickHeart }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.image} />
    <div className={styles.info}>
      <div className={styles.red} />
      <span className={styles.name}>{name}</span>
      <Heart
        className={
          styles.heart + (fullHeart ? ' ' + styles['heart--full'] : '')
        }
        type={fullHeart ? FULL : EMPTY_THICK}
        onClick={onClickHeart}
      />
    </div>
  </div>
);
