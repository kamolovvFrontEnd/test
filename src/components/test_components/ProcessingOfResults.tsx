import { useState } from "react";
import styles from "./ProcessingOfResults.module.css";
import { Link } from "react-router-dom";

function ProcessingOfResults() {
  const [complete, setComplete] = useState(false);
  setTimeout(() => {
    setComplete(true);
  }, 3000);

  const Loader = () => {
    return (
      <div className={styles.spinner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    );
  };

  return (
    <div className={styles.load}>
      <h1>Обработка результатов</h1>
      {complete ? <h1>Все готово</h1> : <Loader />}
      <h4>
        Определение стиля
        мышления..................................................................
      </h4>
      {complete ? (
        <Link to="/result" className={styles.link_next}>
          Перейти к результату
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProcessingOfResults;
