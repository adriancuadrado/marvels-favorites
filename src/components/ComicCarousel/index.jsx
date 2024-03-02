import Comic from '../Comic';
import styles from './index.module.css';

export default ({ className }) => (
  <div className={[styles.carousel, className].join(' ')}>
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
    <Comic />
  </div>
);
