import styles from '../../../Css/Modules/Button.module.css';

const Button = ({ name, value, type, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type || 'button'} name={name} className={styles.button} {...props}>
    {value}
  </button>
);

export default Button;
