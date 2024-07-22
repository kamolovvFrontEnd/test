import styles from "./MainPage.module.css";
import moreInfo from "../assets/moreInfo.svg";
import quote from "../assets/quote.svg";
import lungs from "../assets/lungs.svg";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <main>
        <section className={styles.firstSection}>
          <div>
            <h4>Пройди точный и быстрый</h4>
            <h1>ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</h1>
          </div>
          <div>
            <Link to="/test" className={styles.btnStyle}>
              Пройдите тест
            </Link>
            <p>
              <span style={{ color: "#FFC700" }}>
                и получите рекомендации по развитию своего интеллекта
              </span>{" "}
              <br />и улучшению финансового благосостояния и личной жизни
            </p>
            <a href="#more-info" className={styles.moreInfo}>
              <img src={moreInfo} alt="more info" /> <br />
              Подробнее
            </a>
          </div>
        </section>
        <section className={styles.secondSection} id="more-info">
          <img src={quote} alt="quote" width={50} />
          <h1>
            Профессиональный IQ-тест позволяет не только определить коэффициент
            вашего интеллекта, но и выработать список рекомендаций для повышения
            этого показателя.{" "}
          </h1>
          <img
            src={quote}
            alt="quote"
            width={50}
            style={{ marginLeft: "auto", rotate: "180deg" }}
          />
        </section>
        <section className={styles.thirdSection}>
          <p style={{ fontSize: "1.8rem" }}>
            Также по результатам теста <span>ВЫ ПОЛУЧИТЕ</span> подробные{" "}
            <span>СОВЕТЫ</span> по определению наиболее перспективной{" "}
            <span>ДЛЯ ВАШЕГО ТИПА</span> <span>интеллекта</span>{" "}
            <span>СФЕРА ДЕЯТЕЛЬНОСТИ,</span> которая принесет вам скорейший
            финансовый результат.
          </p>
          <img src={lungs} alt="lungs" />
          <Link to="/test">Пройдите тест</Link>
        </section>
        <section className={styles.fourthSection}>
          <p className={styles.firstParagraph}>
            Прохождение теста займет у вас не более{" "}
            <span className={styles.yellowText}>12 минут</span>, а его
            результаты вы сможете{" "}
            <span className={styles.yellowText}>использовать всю жизнь</span>.
          </p>
          <p className={styles.secondParagraph}>
            Профессиональная интерпретация и детально{" "}
            <span className={styles.boldText}>проработанные рекомендации</span>{" "}
            позволят вам качественно{" "}
            <span className={styles.boldText}>
              изменить все аспекты своей жизни
            </span>
            : от финансового до любовного.
          </p>
          <Link to="test">Пройдите тест</Link>
          <p>© 2019</p>
        </section>
      </main>
    </>
  );
}

export default MainPage;
