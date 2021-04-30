import { SyntheticEvent, useState } from 'react';
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

    console.log(user);

    setEmail("");
    setConfirm("");
    setPassword("");
    setDisplayname("");
    setDay("");
    setMonth("");
    setYear("");
    setGender("");

  }

  function validacao() {
    const erros: { email: string } = { email: "" }

    if (email != confirm) {
      erros.email = "Email diferente"
    }
    return erros;
  }

  return (
    <div>
      <h1 className={styles.formTitle}>Inscreva-se!</h1>
      <form className={styles.formContainer} onSubmit={submitForm}>
        <div>

          {/* ------ EMAIL ---------- */}
          <div>
            <div>
              <label htmlFor="email" >Qual é o seu e-mail?</label>
            </div>
            <input type="email"
              aria-invalid="false"
              id="email" name="email"
              placeholder="Insira seu e-mail."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ------ CONFIRMAR EMAIL ---------- */}
          <div>
            <div>
              <label htmlFor="confirm">Confirme seu e-mail</label>
            </div>
            <input type="email"
              aria-invalid="false"
              id="confirm"
              name="confirm"
              pattern=""
              placeholder="Insira o e-mail novamente."
              value=""
              onChange={(e) => setConfirm(e.target.value)}
            />

          </div>

          {/* ------ SENHA ---------- */}
          <div>
            <div>
              <label htmlFor="password">Crie uma senha</label>
            </div>
            <input type="password"
              aria-invalid="false"
              autoComplete="new-password"
              id="password"
              pattern=".{8,}"
              name="password"
              placeholder="Crie uma senha."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          {/* ------ NOME ---------- */}
          <div>
            <div>
              <label htmlFor="displayname">Como devemos chamar você?</label>
            </div>
            <input type="text"
              aria-invalid="false"
              id="displayname"
              name="displayname"
              placeholder="Insira um nome de perfil"
              value={displayname}
              onChange={(e) => setDisplayname(e.target.value)}
            />
            <div>Isso será exibido no seu perfil.</div>
          </div>

          {/* ------ DATA ---------- */}
          <div>
            <div>
              <label>Qual a sua data de nascimento?</label>
            </div>
            <div data-testid="dob-parent">
              <div data-testid="day">
                <div>
                  <div>
                    <label htmlFor="day">Dia</label>
                  </div>
                  <input type="text"
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
              <div data-testid="month"><div>
                <div>
                  <label htmlFor="month">Mês</label>
                </div>
                <div>
                  <select id="month"
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
                  <svg role="img"
                    focusable="false"
                    height="16"
                    width="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polyline points="20 8 12 17 4 8" fill="none" stroke="#181818" />
                  </svg>
                </div>
              </div>
              </div>
              <div data-testid="year"><div>
                <div>
                  <label htmlFor="year">Ano</label>
                </div>
                <input type="text"
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
              </div>
            </div>
            <div data-testid="dob-error-messages-parent" />
          </div>

          {/* ------ GENERO ---------- */}
          <fieldset role="radiogroup">
            <legend>Qual é o seu gênero?</legend>
            <div>
              <div>
                <input type="radio"
                  id="gender_option_male"
                  name="gender"
                  value="male"
                  aria-invalid="false"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="gender_option_male">
                  <span></span>
                  <span>Masculino</span>
                </label>
                <div>
                  <input type="radio"
                    id="gender_option_female"
                    name="gender"
                    value="female"
                    aria-invalid="false"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="gender_option_female">
                    <span></span>
                    <span>Feminino</span>
                  </label>
                </div>
                <div>
                  <input type="radio"
                    id="gender_option_nonbinary"
                    name="gender"
                    value="nonbinary"
                    aria-invalid="false"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="gender_option_nonbinary">
                    <span></span>
                    <span>Não binário</span>
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* ------ BOTAO ---------- */}
          <div>
            <div>
              <button type="submit" >
                <div>Inscrever-se</div>
                <div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}