import Image from 'next/image';
import styles from './index.module.css';

export default function ExternalImage({ src, alt, className = '' }) {
  return (
    <div className={[styles.image, className].join(' ')}>
      <Image src={src} alt={alt} sizes='auto' fill />
    </div>
  );
}
