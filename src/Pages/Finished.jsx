import styles from '../Css/Modules/Finished.module.css';

const Finished = () => (
  <section className={styles.finishedContainer}>
    <div className={styles.finishedContent}>
      <div className={styles.finishedSvgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className={styles.finishedDone}>Cadastro realizado com sucesso!</p>
      <p className={styles.finishedText}>Você já pode retornar para a home.</p>
    </div>
  </section>
);

export default Finished;
