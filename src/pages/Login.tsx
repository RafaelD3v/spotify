import { SyntheticEvent, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from '../styles/components/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Para continuar, faça login no Spotify.</h1>

        <div className={styles.loginDivData}>
          <label className={styles.loginLabel} htmlFor="login-username" id="login-username" placeholder="Endereço de e-mail ou nome de usuário">
            Endereço de e-mail ou nome de usuário
          </label>
          <input className={styles.loginInput} type="text" />
        </div>

        <div className={styles.loginDivData}>
          <label className={styles.loginLabel} htmlFor="login-password" id="login-password" placeholder="Senha">
            Senha
          </label>
          <input className={styles.loginInput} type="password" />
        </div>

        <div className={styles.loginDataDivButton}>
          <button
            className={styles.loginDataButton}
            id="login-button"
            ng-click="onLoginClick($event)"
          >
            Entrar
        </button>
        </div>
      </form>
    </div>
  );
}


{/* <div className="row password-reset">
  <div className="col-xs-12">
    <p>
      <a id="reset-password-link" ng-href="https://www.spotify.com/password-reset/" analytics-on="click" analytics-category="Login View" analytics-event="Forgot Button" analytics-label="" class="ng-binding" href="https://www.spotify.com/password-reset/">Esqueceu sua senha?</a>
    </p>
  </div>
</div>

<div className="row row-submit">
  <div className="col-xs-12 col-sm-6">
    <div className="checkbox">
        <label className="ng-binding">
          <input ng-model="form.remember" type="checkbox" name="remember" analytics-on="checked" analytics-category="Login View" id="login-remember" class="ng-pristine ng-untouched ng-valid ng-not-empty">
            Lembrar de mim
          <span className="control-indicator"></span>
      </label>
</div> */}