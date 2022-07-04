import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { ShowPasswordBtn } from 'components/ShowPasswordBtn';
import formStyles from 'components/ContactForm/ContactForm.module.css';
import styles from './RegisterPage.module.css';

const registerSchema = yup.object().shape({
  name: yup.string().required().max(16),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export function RegisterPage() {
  const dispatch = useDispatch();

  const isPasswordVisible = useSelector(state => state.auth.isPasswordVisible);

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
              <p className={formStyles.ErrorMessage}>{errors.name.message}</p>
            )}
          </label>

          <label className={styles.Label}>
            <input
              className={formStyles.Input}
              {...register('email')}
              type="email"
              placeholder="email"
            />
            {errors.email && (
              <p className={formStyles.ErrorMessage}>{errors.email.message}</p>
            )}
          </label>

          <label className={styles.Label}>
            <input
              className={styles.Input}
              {...register('password')}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="password"
            />
            {errors.password && (
              <p className={formStyles.ErrorMessage}>
                {errors.password.message}
              </p>
            )}

            <ShowPasswordBtn />
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
