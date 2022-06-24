import { NavLink } from 'react-router-dom';
import { BiUserPlus, BiLogIn } from 'react-icons/bi';
import styles from 'components/Navigation/Navigation.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.ActiveLink : styles.Link
        }
        to="/login"
        exact
      >
        <BiLogIn size={24} /> Log In
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.ActiveLink : styles.Link
        }
        to="/register"
        exact
      >
        <BiUserPlus size={24} /> Register
      </NavLink>
    </div>
  );
}
