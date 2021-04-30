import styles from  '../styles/components/Modal.module.css'

export default function Modal() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h1>Cadastrado com sucesso!</h1>
      </div>
    </div>
  );
}