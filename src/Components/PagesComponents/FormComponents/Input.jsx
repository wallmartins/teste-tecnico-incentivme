import styles from '../../../Css/Modules/Input.module.css';

const Input = ({ label, id, name, value, type, ...props }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={name} className={styles.label}>
      {label}:
    </label>
    <input id={id} name={name} type={type} className={styles.input} value={value} {...props} />
  </div>
);

export default Input;
