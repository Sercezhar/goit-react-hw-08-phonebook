import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import styles from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div className={styles.Container}>
      <button
        className={styles.LogOut}
        onClick={() => dispatch(logOutUser())}
        type="submit"
      >
        <BiLogOut size={24} />
        Log Out
      </button>
      <BiUserCircle size={40} />
      <span className={styles.Greeting}>
        <span>Welcome,</span>
        <span className={styles.Name}>{name}</span>
      </span>
    </div>
  );
}
