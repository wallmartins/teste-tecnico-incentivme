import Proptype from 'prop-types';
import styles from '../../Css/Modules/Navbar.module.css';

const Navbar = ({ location }) => (
  <nav className={styles.navbarContainer}>
    <ul>
      <li
        className={location === 'Register' ? `${styles.navbarSteps} ${styles.navbarActive}` : `${styles.navbarSteps}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.navbarSVG} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Passo 1: <span>Cadastro</span>
        </p>
      </li>
      <li className={location === 'Contact' ? `${styles.navbarSteps} ${styles.navbarActive}` : `${styles.navbarSteps}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.navbarSVG} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Passo 2: <span>Contato</span>
        </p>
      </li>
      <li className={location === 'Address' ? `${styles.navbarSteps} ${styles.navbarActive}` : `${styles.navbarSteps}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.navbarSVG} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Passo 3: <span>Endereço</span>
        </p>
      </li>
    </ul>
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  location: Proptype.string.isRequired,
};
