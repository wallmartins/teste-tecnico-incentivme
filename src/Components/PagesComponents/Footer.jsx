import Proptype from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../Css/Modules/Footer.module.css';
import Button from './FormComponents/Button';

const Footer = ({ path }) => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerContent}>
      <hr className={styles.footerLine} />
      <div className={styles.footerInfo}>
        <span className={styles.footerText}>
          Clique em continue para seguir para o próximo passo e adicionar os{' '}
          <span className={styles.footerTextBold}>telefones</span>
        </span>
        <Link to={path}>
          <Button name="button" value="continuar" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

Footer.propTypes = {
  path: Proptype.string.isRequired,
};
