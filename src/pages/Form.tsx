import React from 'React';
import styles from '../styles/components/Form.module.css';

interface IMyComponentProps {
  email: string
  password: string,
  day: string,
  month: string,
  year: string,
  gender: string
}

export default class Form extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: '',
      password: '',
      displayname: '',
      day: '',
      month: '',
      year: '',
      gender: ''
    };

  }

  render() {
    const change = (evento) => {
      const { name, value } = evento.target;
      this.setState({ [name]: value });
    }

    const validacao = () => {
      const erros = {}

      if (this.state.email != this.state.confirm) {
        erros.email = "Email diferente"
      }
      return erros;
    }

    const submitform = (evento) => {
      evento.preventDefault();

      const erros = validacao();

      if (erros.email) {
        this.setState({
          erros: erros
        });

        return;
      }

      const { email, password, displayname, day, month, year, gender } = this.state;

      const usuario = {
        email,
        password,
        displayname,
        day,
        month,
        year,
        gender,
      }

      console.log(usuario);

      const reset = () => {
        this.setState({
          email: '',
          password: '',
          displayname: '',
          day: '',
          month: '',
          year: '',
          gender: ''
        });
      }


      reset();
    }

    return (
      <div>
        <h1 className={styles.formTitle}>Inscreva-se!</h1>
        <form className={styles.formContainer} onSubmit={submitform}>
          <div>

            {/* ------ EMAIL ---------- */}
            <div>
              <div>
                <label htmlFor="email" >Qual é o seu e-mail?</label>
              </div>
              <input type="email" aria-invalid="false" id="email" name="email" placeholder="Insira seu e-mail." value={this.state.email} onChange={change} />s
          </div>

            {/* ------ SENHA ---------- */}
            <div>
              <div>
                <label htmlFor="password">Crie uma senha</label>
              </div>
              <input type="password" aria-invalid="false" autoComplete="new-password" id="password" pattern=".{8,}" name="password" placeholder="Crie uma senha." value={this.state.password} onChange={change} />
            </div>


            {/* ------ NOME ---------- */}
            <div>
              <div>
                <label htmlFor="displayname">Como devemos chamar você?</label>
              </div><input type="text" aria-invalid="false" id="displayname" name="displayname" placeholder="Insira um nome de perfil" value={this.state.displayname} onChange={change} />
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
                    <input type="text" aria-invalid="false" id="day" inputMode="numeric" maxLength={2} name="day" pattern="((0?[1-9])|([12][0-9])|(3[01]))" placeholder="DD" value={this.state.day} onChange={change} />
                  </div>
                </div>
                <div data-testid="month"><div>
                  <div>
                    <label htmlFor="month">Mês</label>
                  </div><div><select id="month" name="month" aria-invalid="false" value={this.state.month} onChange={change}>
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
                    <svg role="img" focusable="false" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 8 12 17 4 8" fill="none" stroke="#181818"></polyline>
                    </svg>
                  </div>
                </div>
                </div>
                <div data-testid="year"><div>
                  <div>
                    <label htmlFor="year">Ano</label>
                  </div>
                  <input type="text" aria-invalid="false" id="year" inputMode="numeric" maxLength={4} name="year" pattern="(19[0-9]{2})|(200)[0-5]" placeholder="AAAA" value={this.state.year} onChange={change} />
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
                  <input type="radio" id="gender_option_male" name="gender" value={this.state.gender} aria-invalid="false" onChange={change} />
                  <label htmlFor="gender_option_male">
                    <span></span>
                    <span>Masculino</span>
                  </label>
                  <div>
                    <input type="radio" id="gender_option_female" name="gender" value={this.state.gender} aria-invalid="false" onChange={change} />
                    <label htmlFor="gender_option_female">
                      <span></span>
                      <span>Feminino</span>
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="gender_option_nonbinary" name="gender" value={this.state.gender} aria-invalid="false" onChange={change} />
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
                <button>
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
}