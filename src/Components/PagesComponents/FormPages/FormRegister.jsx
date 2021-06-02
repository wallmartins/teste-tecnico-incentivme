import styles from '../../../Css/Modules/FormRegister.module.css';
import Input from '../FormComponents/Input';

const Form = () => (
  <section className={styles.registerInputsContainer}>
    <div className={styles.registerInputs}>
      <Input id="name" name="name" type="text" label="nome" />
      <Input id="email" name="email" type="email" label="email" />
      <Input id="password" name="password" type="password" label="senha" />
      <div className={styles.activeCheckboxContainer}>
        <label className={styles.activeCheckboxContent}>
          <span className={styles.activeCheckboxInput}>
            <input type="checkbox" name="checked" />
            <span className={styles.activeCheckboxControl}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="none" stroke="white" strokeWidth="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
              </svg>
            </span>
          </span>
        </label>
        <span className={styles.activeCheckboxText}>
          <span className={styles.activeCheckboxTextName}>ATIVO:</span> ao clicar você concorda que leu e aceita os
          termos de uso.
        </span>
      </div>
    </div>
  </section>
);

export default Form;
