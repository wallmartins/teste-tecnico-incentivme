import styles from '../../../Css/Modules/Advise.module.css';

const Advise = () => (
  <div className={styles.adviseContainer}>
    <ul className={styles.adviseText}>
      <li>
        <span className={styles.adviseTextWarning}>ATENÇÃO:</span> No passo 1: todos os campos são obrigatórios.
      </li>
      <li>No passo 2: é necessário adicionar, ao menos, um número de telefone.</li>
      <li>No passo 3: é necessário adicionar, ao menos, um número endereço.</li>
    </ul>
  </div>
);

export default Advise;
