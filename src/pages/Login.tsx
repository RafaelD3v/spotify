import { SyntheticEvent, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from '../styles/components/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.get("http://localhost:3001/users").then((response) => {
    console.log(response);
  }).catch((error) => {
    if (error) {
      console.log(error);
    }
  });

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Para continuar, faça login no Spotify.</h1>

        <div className={styles.loginDivData}>
          <label
            className={styles.loginLabel}
            htmlFor="login-email"
            placeholder="Endereço de e-mail ou nome de usuário"
          >
            Endereço de e-mail ou nome de usuário
          </label>
          <input
            className={styles.loginInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.loginDivData}>
          <label
            className={styles.loginLabel}
            htmlFor="login-password"
            placeholder="Senha"
          >
            Senha
          </label>
          <input
            className={styles.loginInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.loginDataDivButton}>
          <button
            className={styles.loginDataButton}
            type="submit"
          >
            Entrar
        </button>
        </div>
      </form>
    </div>
  );
}