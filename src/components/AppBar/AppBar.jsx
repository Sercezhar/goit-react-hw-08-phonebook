import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { IoBook } from 'react-icons/io5';
import styles from './AppBar.module.css';


export function AppBar() {
  return (
    <>
      <header>
        <div className={styles.Container}>
          <span className={styles.Logo}>
            <IoBook size={40} />
            <span className={styles.Text}>
              <span className={styles.First}>Your</span>
              <span className={styles.Second}>Phonebook</span>
            </span>
          </span>

          <Navigation />
          <AuthNav />
        </div>
      </header>
      <Outlet />
    </>
  );
}
