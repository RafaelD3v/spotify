import styles from '../styles/components/Footer.module.css';

function dataAtualFormatada() {
  const data = new Date(),
    dia = data.getDate().toString(),
    diaF = (dia.length === 1) ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length === 1) ? '0' + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}

export default function Footer() {
  return (
    <div className={styles.footer} >
      <span className={styles.footerSpan} >
        <img className={styles.logo} src="./images/logo.png" alt="Logo" />
        <p className={styles.footerData}>Data: {dataAtualFormatada()}</p>
        <p className={styles.footerMarca}>© 2021 Spotify AB</p>
      </span>
    </div>
  );
}