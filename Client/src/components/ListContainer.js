import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ListContainer.module.css";
const ListContainer = () => {
  return (
    <div className={styles.containerFrDieListe}>
      <ol className={styles.containerFrDieListe1} />
      <div className={styles.listeDerBesuchten}>Liste der besuchten Städte</div>
      <li className={styles.lissabonNeapelImperiaContainer}>
        <ul className={styles.lissabonNeapelImperiaNizza}>
          <li className={styles.lissabon}>Lissabon</li>
          <li className={styles.lissabon}>Neapel</li>
          <li className={styles.lissabon}>Imperia</li>
          <li className={styles.lissabon}>Nizza</li>
        </ul>
      </li>
    </div>
  );
};

export default ListContainer;
