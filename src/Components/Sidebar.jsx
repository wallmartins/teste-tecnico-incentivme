import styles from '../Css/Modules/Sidebar.module.css';
import logo from '../Assets/logo_incentiv-small.png';
import AsideSVG from '../Assets/undraw_forming_ideas_0pav.svg';

const Sidebar = () => (
  <aside className={styles.sidebarContainer}>
    <img className={styles.logo} src={logo} alt="logo da empresa incentiv.me" />

    <section className={styles.asideText}>
      <h1 className={styles.asideTitle}>Cadastro de Contatos</h1>
      <p className={styles.asideInfo}>
        Preencha o formulário ao lado para que possa realizar o seu cadastro em nossa plataforma. Será rápido e fácil.
        Basta seguir o passo a passo abaixo:
      </p>
      <nav className={styles.asideStepsContainer}>
        <ul>
          <li className={styles.asideSteps}>
            Passo 1:{' '}
            <span className={styles.asideStepsText}>criar a sua conta informando nome, email, senha e o ativo;</span>
          </li>
          <li className={styles.asideSteps}>
            Passo 2: <span className={styles.asideStepsText}>informe seus números de contato;</span>
          </li>
          <li className={styles.asideSteps}>
            Passo 3: <span className={styles.asideStepsText}>informe o seu cep e cadastre o seu endereço.</span>
          </li>
        </ul>
      </nav>
    </section>

    <img
      src={AsideSVG}
      alt="ilustração com algumas formas geométricas formando algumas árvores, uma montanha, a lua e um homem caminhando"
      className={styles.asideSVG}
    />
  </aside>
);

export default Sidebar;
