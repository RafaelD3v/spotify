import styles from '../styles/components/Header.module.css';

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header} >
      <span className={styles.headerSpan} >
        <img className={styles.logo} src="./images/logo.png" alt="Logo" />
        <Link to="/Ajuda" className={styles.link}>Ajuda</Link>
      </span>
    </div>
  );
}

export default Header;