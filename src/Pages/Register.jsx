import Advise from '../Components/PagesComponents/FormPages/Advise';
import FormRegister from '../Components/PagesComponents/FormPages/FormRegister';
import styles from '../Css/Modules/Register.module.css';

const Register = () => (
  <div className={styles.registerContainer}>
    <Advise />
    <FormRegister />
  </div>
);

export default Register;
