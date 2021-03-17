import styles from '../styles/components/Home.module.css';

function Home() {
    return (
      <div className={styles.home} >
        <span className={styles.homeSpan} >
            <img className={styles.homeImg} src="/images/img-spotify.jpg" alt="Spotify"/>
            <p className={styles.homeTitle}>Escutar muda tudo</p><br/>
            <a className={styles.homeTexto}>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</a>
        </span>
      </div>
    );
  }
  
export default Home;