import styles from '../styles/components/Header.module.css';

function Header() {
    return (
      <div className={styles.header} >
        <span className={styles.headerSpan} > 
            <img className={styles.logo} src="./images/logo.png" alt="Logo"/>
            <a className={styles.link} href="/">Ajuda</a>
        </span>
      </div>
    );
  }
  
export default Header;