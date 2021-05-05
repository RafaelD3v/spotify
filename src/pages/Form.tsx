import { SyntheticEvent, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from '../styles/components/Form.module.css';

export default function Form() {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState<ErrorFormT>();

  function submitForm(e: SyntheticEvent) {
    e.preventDefault();
    const erros = validacao();

    if (erros.email) {
      setError({
        erros: erros
      });

      return;
    }

    const user = {
      email,
      password,
      displayname,
      day,
      month,
      year,
      gender,
    }

    axios.post("http://localhost:3001/users", user).then(() => {
      console.log("Enviado com sucesso!");
      setEmail("");
      setConfirm("");
      setPassword("");
      setDisplayname("");
      setDay("");
      setMonth("");
      setYear("");
      setGender("");
    });
  }

  // Navigator
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  function validacao() {
    const erros: { email: string } = { email: "" }

    if (email != confirm) {
      erros.email = "Email diferente"
    }
    return erros;
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitForm}>

        <h1 className={styles.formTitle}>Inscreva-se grátis e comece a curtir.</h1>

        {/* ------ EMAIL ---------- */}
        <div className={styles.formDataDivInput}>
          <input className={styles.formDataInput}
            type="email"
            aria-invalid="false"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* ------ CONFIRMAR EMAIL ---------- */}
        <div className={styles.formDataDivInput}>
          <input className={styles.formDataInput}
            type="email"
            aria-invalid="false"
            id="confirm"
            name="confirm"
            placeholder="Confirmar e-mail"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

        </div>

        {/* ------ SENHA ---------- */}
        <div className={styles.formDataDivInput}>
          <input className={styles.formDataInput}
            type="password"
            aria-invalid="false"
            autoComplete="new-password"
            id="password"
            pattern=".{8,}"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        {/* ------ NOME ---------- */}
        <div className={styles.formDataDivInput}>
          <input className={styles.formDataInput}
            type="text"
            aria-invalid="false"
            id="displayname"
            name="displayname"
            placeholder="Como devemos chamar você?"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </div>

        {/* ------ DATA ---------- */}
        <div>
          <div className={styles.formDataLabel}>
            <label>Data de nascimento</label>
          </div>
          <div data-testid="dob-parent" className={styles.formData}>

            <span>
              <div data-testid="day">
                <div>
                  <input className={styles.formDataInput}
                    type="text"
                    aria-invalid="false"
                    id="day"
                    inputMode="numeric"
                    maxLength={2}
                    name="day"
                    pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                    placeholder="DD"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
              </div>
            </span>

            <span>
              <div data-testid="month">
                <select className={styles.formDataInput}
                  id="month"
                  name="month"
                  aria-invalid="false"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Mês</option> {/* selected={} disabled={} */}
                  <option value="01">janeiro</option>
                  <option value="02">fevereiro</option>
                  <option value="03">março</option>
                  <option value="04">abril</option>
                  <option value="05">maio</option>
                  <option value="06">junho</option>
                  <option value="07">julho</option>
                  <option value="08">agosto</option>
                  <option value="09">setembro</option>
                  <option value="10">outubro</option>
                  <option value="11">novembro</option>
                  <option value="12">dezembro</option>
                </select>
              </div>
            </span>

            <span>
              <div data-testid="year">
                <input className={styles.formDataInput}
                  type="text"
                  aria-invalid="false"
                  id="year"
                  inputMode="numeric"
                  maxLength={4}
                  name="year"
                  pattern="(19[0-9]{2})|(200)[0-5]"
                  placeholder="AAAA"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </span>
          </div>
          <div data-testid="dob-error-messages-parent" />
        </div>

        {/* ------ GENERO ---------- */}
        <fieldset role="radiogroup" className={styles.formDataDivInput}>
          <span>
            <input className={styles.formDataRadio}
              type="radio"
              id="gender_option_male"
              name="gender"
              value="male"
              checked={gender === "male"}
              aria-invalid="false"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="gender_option_male">
              <span>Masculino</span>
            </label>
          </span>

          <span>
            <input className={styles.formDataRadio}
              type="radio"
              id="gender_option_female"
              name="gender"
              value="female"
              checked={gender === "female"}
              aria-invalid="false"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="gender_option_female">
              <span>Feminino</span>
            </label>
          </span>

          <span>
            <input className={styles.formDataRadio}
              type="radio"
              id="gender_option_nonbinary"
              name="gender"
              value="nonbinary"
              checked={gender === "nonbinary"}
              aria-invalid="false"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="gender_option_nonbinary">
              <span>Não binário</span>
            </label>
          </span>
        </fieldset>

        {/* ------ BOTAO ---------- */}
        <div className={styles.formDataDivButton} onClick={handleClick}>
          <button type="submit" className={styles.formDataButton}>
            Inscrever-se
            </button>
        </div>
      </form>
    </div>
  );
}