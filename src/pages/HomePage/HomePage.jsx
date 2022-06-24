import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span role="img" aria-label="Greet icon">
          💁‍♀️
        </span>
        ЦЕ БАЗА
      </h1>
    </div>
  );
}
