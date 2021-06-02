import Advise from '../Components/PagesComponents/FormPages/Advise';
import FormAddress from '../Components/PagesComponents/FormPages/FormAddress';
import styles from '../Css/Modules/Address.module.css';

const Address = () => (
  <div className={styles.addressContainer}>
    <Advise />
    <FormAddress />
  </div>
);

export default Address;
