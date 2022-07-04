import { useSelector, useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { ShowPasswordBtn } from 'components/ShowPasswordBtn';
import formStyles from 'components/ContactForm/ContactForm.module.css';
import inputStyles from 'pages/RegisterPage/RegisterPage.module.css';

const registerSchema = yup.object().shape({
  email: yup.string().email().required('Enter your email to log in'),
  password: yup.string().required('Enter your password to log in').min(8),
});

export default function LoginPage() {
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
      await dispatch(logInUser(data));
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
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
              <p className={formStyles.ErrorMessage}>{errors.email.message}</p>
            )}
          </label>

          <label className={formStyles.Label}>
            <input
              className={inputStyles.Input}
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
            Log In
          </button>
        </form>
      </Section>
    </SectionsWrapper>
  );
}
