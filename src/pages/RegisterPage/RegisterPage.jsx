import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from 'redux/auth/authOperations';
import formStyles from 'components/ContactForm/ContactForm.module.css';
import styles from './RegisterPage.module.css';

import { useDispatch } from 'react-redux';

const registerSchema = yup.object().shape({
  name: yup.string().required().max(16),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export function RegisterPage() {
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
      await dispatch(registerUser(data));
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <SectionsWrapper>
      <Section tag={'h1'} title={'Registration'}>
        <form
          className={formStyles.Form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <label className={styles.Label}>
            <input
              className={formStyles.Input}
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
            Register
          </button>
        </form>
      </Section>
    </SectionsWrapper>
  );
}

export default RegisterPage;
