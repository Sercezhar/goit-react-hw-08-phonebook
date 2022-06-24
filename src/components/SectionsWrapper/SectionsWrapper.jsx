import styles from './SectionsWrapper.module.css';

export function SectionsWrapper({ children }) {
  return <div className={styles.Container}>{children}</div>;
}
