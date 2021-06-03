import Advise from '../Components/PagesComponents/FormPages/Advise';
import FormContact from '../Components/PagesComponents/FormPages/FormContact';
import styles from '../Css/Modules/Contact.module.css';

const Contact = () => (
  <div className={styles.contactContainer}>
    <Advise />
    <FormContact />
  </div>
);

export default Contact;
