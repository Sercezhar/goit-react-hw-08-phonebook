import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import styles from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(state => state.auth.user.name);

  function handleLogOut() {
    dispatch(logOutUser());
    navigate('/');
  }

  return (
    <div className={styles.Container}>
      <button
        className={styles.LogOut}
        onClick={() => handleLogOut()}
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
