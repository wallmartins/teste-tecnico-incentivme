import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../../../Css/Modules/Form.module.css';
import useValidateForm from '../../../Hooks/useValidateForm';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

const FormRegister = () => {
  const name = useValidateForm();
  const email = useValidateForm('email');
  const password = useValidateForm('password');
  const [enableButton, setEnableButton] = useState(false);
  const [checkedButton, setCheckedButton] = useState(false);

  function setEnable() {
    setEnableButton(true);
    return true;
  }
  useEffect(() => {
    if (name.value && !email.error && email.value && !password.error && password.value && checkedButton) {
      setEnable();
      return true;
    }

    setEnableButton(false);
    return true;
  }, [name.value, email.value, password.value, email.error, password.error, checkedButton]);

  return (
    <>
      <section className={styles.formContainer}>
        <div className={styles.formInputs}>
          <Input id="name" name="name" type="text" label="nome" {...name} />
          <Input id="email" name="email" type="email" label="email" {...email} />
          <Input id="password" name="password" type="password" label="senha" {...password} />
          <div className={styles.activeCheckboxContainer}>
            <div className={styles.activeCheckboxContent}>
              <label className={styles.activeCheckboxInput}>
                <input type="checkbox" name="checked" required onClick={() => setCheckedButton(!checkedButton)} />
                <span className={styles.activeCheckboxControl}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="none" stroke="white" strokeWidth="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
                  </svg>
                </span>
              </label>
            </div>
            <span className={styles.activeCheckboxText}>
              <span className={styles.activeCheckboxTextName}>ATIVO:</span> ao clicar voc?? concorda que leu e aceita os
              termos de uso.
            </span>
          </div>
        </div>
      </section>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <span className={styles.footerText}>
            Clique em Continuar para <span className={styles.footerTextBold}>contatos</span>
          </span>
          <Link to="/Contact">
            {enableButton ? (
              <Button name="button" value="Continuar" />
            ) : (
              <Button name="button" value="Continuar" disabled />
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
