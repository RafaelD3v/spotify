import styles from '../styles/components/Header.module.css';

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header} >
      <span className={styles.headerSpan} >
        <img className={styles.logo} src="./images/logo.png" alt="Logo" />
        <ul className="headerNavBar">
          <li>
            <Link to="/" className={styles.headerLinks}>Home</Link>
          </li>
          <li>
            <Link to="/playlists" className={styles.headerLinks}>Playlists</Link>
          </li>
          <li>
            <Link to="/ajuda" className={styles.headerLinks}>Ajuda</Link>
          </li>
          <li>
            <Link to="/register" className={styles.headerLinks}>Inscreva-se</Link>
          </li>
          <li>
            <Link to="/login" className={styles.headerLinks}>Entrar</Link>
          </li>
        </ul>
      </span>
    </div>
  );
}