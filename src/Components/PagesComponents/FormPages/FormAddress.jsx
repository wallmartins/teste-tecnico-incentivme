import { useState } from 'react';
import styles from '../../../Css/Modules/Form.module.css';
import stylesAdress from '../../../Css/Modules/Address.module.css';
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

const FormAddress = () => {
  const [userCEP, setUserCEP] = useState();
  const [address, setAddress] = useState();
  const [userAddress, setUserAddress] = useState([]);

  async function searchAdress() {
    const response = await fetch(`http://viacep.com.br/ws/${userCEP}/json/`);
    const json = await response.json();
    setAddress(json);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserAddress([...userAddress, address]);
    setAddress('');
  }

  return (
    <section className={styles.formContainer}>
      <div className={styles.formInputs}>
        <Input id="cep" name="cep" type="number" label="cep" onBlur={(e) => setUserCEP(e.target.value)} />
        <div className={styles.AddressButtonContainer}>
          <Button name="cep" value="busque seu cep" onClick={searchAdress} />
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className={address ? `${styles.formInputs}` : `${stylesAdress.addressUserContent}`}
        >
          <Input id="cep" name="cep" type="text" label="rua" value={address ? address.logradouro : ''} readOnly />
          <Input
            id="compl"
            name="compl"
            type="text"
            label="compl."
            value={address ? address.complemento : ''}
            readOnly
          />
          <Input id="bairro" name="bairro" type="text" label="bairro" value={address ? address.bairro : ''} readOnly />
          <Input
            id="localidade"
            name="localidade"
            type="text"
            label="cidade"
            value={address ? address.localidade : ''}
            readOnly
          />
          <Input id="uf" name="uf" type="text" label="estado" value={address ? address.uf : ''} readOnly />
          <Button id="newAddress" type="submit" value="adicione um novo endereço" />
        </form>
        <div
          className={userAddress.length > 0 ? `${stylesAdress.allUsersAddress}` : `${stylesAdress.addressUserContent}`}
        >
          {userAddress?.map((add, index) => (
            <div className={stylesAdress.addressCard} key={add.cep}>
              <h3 className={stylesAdress.addressCardTitle}>Endereço {index + 1}</h3>
              <p className={stylesAdress.addressCardText}>{add.logradouro}</p>
              <p className={stylesAdress.addressCardText}>
                {add.bairro}, {add.localidade}, {add.uf}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormAddress;
