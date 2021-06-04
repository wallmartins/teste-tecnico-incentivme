import styles from '../../../Css/Modules/Input.module.css';

const Input = ({ label, id, name, value, type, onChange, error, onBlur, setValue, validate, ...props }) => (
  <>
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
    {error && <p className={styles.error}>{error}</p>}
  </>
);

export default Input;
