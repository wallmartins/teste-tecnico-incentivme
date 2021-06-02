import styles from '../../../Css/Modules/Form.module.css';
import Input from '../FormComponents/Input';

const FormContact = () => (
  <section className={styles.formContainer}>
    <div className={styles.formInputs}>
      <Input id="telhouse" name="telhouse" type="text" label="fixo" />
      <Input id="cellphone" name="cellphone" type="text" label="celular" />
      <Input id="telcompany" name="telcompany" type="text" label="empresa" />
    </div>
  </section>
);

export default FormContact;
