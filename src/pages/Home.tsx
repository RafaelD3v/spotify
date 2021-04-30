import styles from '../styles/components/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home} >

      <span className={styles.homeSpan} >
        <div>
          <h1 className={styles.homeTitle}>Escutar muda tudo</h1>
          <p className={styles.homeText}> Milhões de músicas e podcasts para explorar.E nem precisa de cartão de crédito.</p>
        </div>

        <img className={styles.homeImg} src="/images/img-home.jpg" alt="Spotify" />
      </span>

      <div className={styles.homeRow}></div>
    </div>
  );
}