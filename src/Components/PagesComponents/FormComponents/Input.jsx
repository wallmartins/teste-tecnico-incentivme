import Proptype from 'prop-types';
import styles from '../../../Css/Modules/Input.module.css';

const Input = ({ label, id, name, type }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={name} className={styles.label}>
      {label}:
    </label>
    <input id={id} name={name} type={type} className={styles.input} />
  </div>
);

export default Input;

Input.propTypes = {
  label: Proptype.string.isRequired,
  id: Proptype.string.isRequired,
  name: Proptype.string.isRequired,
  type: Proptype.string.isRequired,
};
