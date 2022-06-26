import { Oval } from 'react-loader-spinner';
import styles from './OvalLoader.module.css';

export function OvalLoader() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Loader}>
        <Oval
          ariaLabel="loading-indicator"
          height={150}
          width={150}
          strokeWidth={5}
          color="var(--theme-color)"
          secondaryColor="#ccc"
        />
      </div>
    </div>
  );
}
