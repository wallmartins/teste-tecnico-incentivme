import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mask, unMask } from 'remask';
import styles from '../../../Css/Modules/Form.module.css';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';

const FormContact = () => {
  const [enableButton, setEnableButton] = useState(false);
  const [error, setError] = useState(false);
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [valueThree, setValueThree] = useState('');

  function putMask(event) {
    if (event.target.name === 'phoneOne') {
      setValueOne(mask(unMask(event.target.value), ['(99) 9999-9999', '(99) 99999-9999']));
    }

    if (event.target.name === 'phoneTwo') {
      setValueTwo(mask(unMask(event.target.value), ['(99) 9999-9999', '(99) 99999-9999']));
    }

    if (event.target.name === 'phoneThree') {
      setValueThree(mask(unMask(event.target.value), ['(99) 9999-9999', '(99) 99999-9999']));
    }
  }

  function checkPutNumber() {
    if (!(valueOne.length || valueTwo.length || valueThree.length)) {
      setError(true);
      return false;
    }

    setError(false);
    setEnableButton(true);
    return true;
  }

  return (
    <>
      <section className={styles.formContainer}>
        <div className={styles.formInputs}>
          {error && (
            <span className={styles.contactError}>Preencha, pelo menos, um dos campos de número de contato</span>
          )}
          <Input
            id="phoneOne"
            name="phoneOne"
            type="text"
            label="telef. 1"
            onChange={putMask}
            value={valueOne}
            onBlur={checkPutNumber}
          />
          <Input
            id="phoneTwo"
            name="phoneTwo"
            type="text"
            label="telef. 2"
            onChange={putMask}
            value={valueTwo}
            onBlur={checkPutNumber}
          />
          <Input
            id="phoneThree"
            name="phoneThree"
            type="text"
            label="telef. 3"
            onChange={putMask}
            value={valueThree}
            onBlur={checkPutNumber}
          />
        </div>
      </section>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <span className={styles.footerText}>
            Clique em Continuar para <span className={styles.footerTextBold}>adicionar o endereço</span>
          </span>
          <Link to="/Address">
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

export default FormContact;
