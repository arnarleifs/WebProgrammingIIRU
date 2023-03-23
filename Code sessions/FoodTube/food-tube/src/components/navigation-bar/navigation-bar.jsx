import { Link } from 'react-router-dom';
import styles from './navigation-bar.module.css';

export const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    <Link to="/">Food tube</Link>
  </nav>
);