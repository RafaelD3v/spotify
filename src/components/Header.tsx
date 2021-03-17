import styles from '../styles/components/Header.module.css';

function Header() {
    return (
      <div className={styles.header} >
        <span className={styles.headerSpan} > 
            <img src="./images/logo.png" alt="Logo"/>
            <a href="">Ajuda</a>
        </span>
      </div>
    );
  }
  
export default Header;