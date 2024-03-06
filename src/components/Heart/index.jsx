import Image from 'next/image';
import { FULL } from './constants';
import styles from './index.module.css';

export default function Heart({ type = FULL, className, onClick, testId }) {
  return (
    <Image
      data-testid={testId}
      src={type}
      alt='Heart icon'
      priority
      className={[styles.image, className].join(' ')}
      onClick={onClick}
      onMouseEnter={(event) => (event.target.src = FULL.src)}
      onMouseLeave={(event) => (event.target.src = type.src)}
    />
  );
}
