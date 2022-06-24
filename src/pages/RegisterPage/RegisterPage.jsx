import { Container } from 'components/Container';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import styles from './RegisterPage.module.css';

export function RegisterPage() {
  return (
    <Container>
      <SectionsWrapper>
        <Section tag={'h1'} title={'Registration'}>
          <form className={styles.Form} autoComplete="off">
            <label className={styles.Label}>
              <input
                className={styles.Input}
                type="text"
                name="name"
                placeholder="name"
              />
            </label>

            <label className={styles.Label}>
              <input
                className={styles.Input}
                type="email"
                name="email"
                placeholder="email"
              />
            </label>

            <label className={styles.Label}>
              <input
                className={styles.Input}
                type="password"
                name="password"
                placeholder="password"
              />
            </label>

            <button className={styles.SubmitBtn} type="submit">
              Register
            </button>
          </form>
        </Section>
      </SectionsWrapper>
    </Container>
  );
}
