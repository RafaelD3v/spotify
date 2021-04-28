import React from 'React';
import styles from '../styles/components/Form.module.css';

//  interface IMyComponentProps {
//    email: string
//    confirm: string,
//    password: string,
//    displayname: string,
//    day: string,
//   month: string,
//   year: string,
//   gender: string
// }

// interface IMyComponentState {
//   email: string
//   confirm: string,
//   password: string,
//   displayname: string,
//   day: string,
//   month: string,
//   year: string,
//   gender: string
// }

export default class Form extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       confirm: '',
//       password: '',
//       displayname: '',
//       day: '',
//       month: '',
//       year: '',
//       gender: '',
//       erros: {}
//     };

//   }

  render() {
//     const change = (evento) => {
//       const { name, value } = evento.target;
//       this.setState({ [name]: value });
//     }

//     const validacao = () => {
//       const erros = {}

//       if (this.state.email != this.state.confirm) {
//         erros.email = "Email diferente"
//       }
//       return erros;
//     }

//     const submitform = (evento) => {
//       evento.preventDefault();

//       const erros = validacao();

//       if (erros.email) {
//         this.setState({
//           erros: erros
//         });

//         return;
//       }

//       const { email, password, displayname, day, month, year, gender } = this.state;

//       const usuario = {
//         email,
//         password,
//         displayname,
//         day,
//         month,
//         year,
//         gender,
//       }

//       console.log(usuario);

//       const reset = () => {
//         this.setState({
//           email: '',
//           confirm: '',
//           password: '',
//           displayname: '',
//           day: '',
//           month: '',
//           year: '',
//           gender: ''
//         });
//       }


//       reset();
//     }
    

    return (
      <div>
         
      </div>
    );
  }
}