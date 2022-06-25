import { Container } from 'components/Container';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { logInUser } from 'redux/auth/authOperations';
import formStyles from 'components/ContactForm/ContactForm.module.css';
import styles from './LoginPage.module.css';

import { useDispatch } from 'react-redux';

const registerSchema = yup.object().shape({
  email: yup.string().email().required('Enter your email to log in'),
  password: yup.string().required('Enter your password to log in').min(8),
});

export function LoginPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async data => {
    try {
      await dispatch(logInUser(data));
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <Container>
      <SectionsWrapper>
        <Section tag={'h1'} title={'Log In'}>
          <form
            className={formStyles.Form}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <label className={formStyles.Label}>
              <input
                className={formStyles.Input}
                {...register('email')}
                type="email"
                placeholder="email"
              />
              {errors.email && (
                <p className={styles.ErrorMessage}>{errors.email.message}</p>
              )}
            </label>

            <label className={formStyles.Label}>
              <input
                className={formStyles.Input}
                {...register('password')}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <p className={styles.ErrorMessage}>{errors.password.message}</p>
              )}
            </label>

            <button className={formStyles.SubmitBtn} type="submit">
              Log In
            </button>
          </form>
        </Section>
      </SectionsWrapper>
    </Container>
  );
}
