import { Container } from 'components/Container';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import styles from 'components/ContactForm/ContactForm.module.css';

export function LoginPage() {
  return (
    <Container>
      <SectionsWrapper>
        <Section tag={'h1'} title={'Log In'}>
          <form className={styles.Form} autoComplete="off">
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
              Log In
            </button>
            {/* <span className={styles.Redirect}>
            Not registered?{' '}
            <NavLink className={styles.Register} to="/register">
              Create an account
            </NavLink>
          </span> */}
          </form>
        </Section>
      </SectionsWrapper>
    </Container>
  );
}
