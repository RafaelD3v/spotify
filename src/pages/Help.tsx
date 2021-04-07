import styles from '../styles/components/Help.module.css';
import Collapsible from 'react-collapsible';

function Help() {
  return (
    <div className={styles.help} >
      <h1>Algumas das principais dúvidas:</h1>
      <Collapsible trigger="Como começar">
        <p>
          Você pode baixar o Spotify grátis para <a href="https://www.spotify.com/br/download/windows/">desktop aqui </a>
          ou acessar uma loja de aplicativos móveis para baixaro aplicativo do Spotify no seu celular ou tablet.
        </p>
        <p>
          Se não quiser baixar o aplicativo, outra opção é acessar
          o nosso web player para começar a ouvir direto no seu navegador.
        </p>
      </Collapsible>

      <Collapsible trigger="Que tipo de assinaturas o Spotify oferece">
        <p>
          Você pode baixar e usar o Spotify gratuitamente
          ou escolher entre um dos nossos planos Premium.
        </p>
      </Collapsible>

      <Collapsible trigger="Cancelamento">
        <p>
          Cancele seu plano Premium a qualquer momento na página da
          sua conta.
        </p>
        <ol>
          <li>Entre em spotify.com/account.</li>
          <li>Em Seu plano, clique em MUDAR DE PLANO.</li>
          <li>Role para baixo até Spotify Free e clique em CANCELAR O PREMIUM.</li>
        </ol>
        <p>
          Sua conta continuará no Premium até a próxima data de cobrança.
          Depois disso, ela passará para a versão gratuita.
        </p>
        <p>
          Você não vai perder suas playlists e músicas salvas quando passar para o Free.
          Você ainda vai poder entrar e ouvir seu som, mas com anúncios.
        </p>
      </Collapsible>
    </div>
  );
}

export default Help;