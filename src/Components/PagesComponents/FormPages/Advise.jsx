import styles from '../../../Css/Modules/Advise.module.css';

const Advise = () => (
  <div className={styles.adviseContainer}>
    <p className={styles.adviseText}>Preencha os campos abaixos, por gentileza.</p>
    <p className={styles.adviseText}>
      <span className={styles.adviseTextWarning}>ATENÇÃO:</span> Todos são obrigatórios!
    </p>
  </div>
);

export default Advise;
