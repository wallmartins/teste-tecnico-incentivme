import Proptype from 'prop-types';
import styles from '../../../Css/Modules/Button.module.css';

const Button = ({ name, value }) => (
  <button type="button" name={name} className={styles.button}>
    {value}
  </button>
);

export default Button;

Button.propTypes = {
  value: Proptype.string.isRequired,
  name: Proptype.string.isRequired,
};
