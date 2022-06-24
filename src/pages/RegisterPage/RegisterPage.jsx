import { Container } from 'components/Container';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegisterPage.module.css';

const registerSchema = yup.object().shape({
  name: yup.string().required().max(16),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <SectionsWrapper>
        <Section tag={'h1'} title={'Registration'}>
          <form
            className={styles.Form}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <label className={styles.Label}>
              <input
                className={styles.Input}
                {...register('name')}
                type="text"
                placeholder="name"
              />
              {errors.name && (
                <p className={styles.ErrorMessage}>{errors.name.message}</p>
              )}
            </label>

            <label className={styles.Label}>
              <input
                className={styles.Input}
                {...register('email')}
                type="email"
                placeholder="email"
              />
              {errors.email && (
                <p className={styles.ErrorMessage}>{errors.email.message}</p>
              )}
            </label>

            <label className={styles.Label}>
              <input
                className={styles.Input}
                {...register('password')}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <p className={styles.ErrorMessage}>{errors.password.message}</p>
              )}
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
