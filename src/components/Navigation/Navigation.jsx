import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.ActiveLink : styles.Link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.ActiveLink : styles.Link
        }
        to="/contacts"
      >
        Phonebook
      </NavLink>
    </nav>
  );
}
