import styles from '../Css/Modules/Register.module.css';
import Navbar from './RegisterComponents/Navbar';
import Form from './RegisterComponents/Form';
import Footer from './RegisterComponents/Footer';

const Register = () => (
  <div className={styles.registerContainer}>
    <Navbar />
    <Form />
    <Footer />
  </div>
);

export default Register;
