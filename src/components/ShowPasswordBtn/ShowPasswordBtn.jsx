import { useSelector, useDispatch } from 'react-redux';
import { togglePasswordVisibility } from 'redux/auth/authSlice';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import styles from './ShowPasswordBtn.module.css';

export function ShowPasswordBtn() {
  const dispatch = useDispatch();
  const isPasswordVisible = useSelector(state => state.auth.isPasswordVisible);

  function handleTogglePasswordVisibility() {
    dispatch(togglePasswordVisibility());
  }

  return (
    <button
      type="button"
      className={isPasswordVisible ? styles.HideBtn : styles.ShowBtn}
      onClick={handleTogglePasswordVisibility}
    >
      {isPasswordVisible ? (
        <RiEyeFill className={styles.Icon} />
      ) : (
        <RiEyeOffFill className={styles.Icon} />
      )}
    </button>
  );
}
