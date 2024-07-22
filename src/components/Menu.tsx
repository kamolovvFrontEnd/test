import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { useDispatch } from "react-redux";
import { setMenu } from "./store/reducer";
import { useDataSelector } from "../hook/useDataSelector";
import brain from "../assets/brain.svg";

function Menu() {
  const { menu } = useDataSelector();
  const dispatch = useDispatch();

  const MenuTitle = () => {
    const title =
      window.location.href === "http://localhost:5173/test"
        ? "Тест на определение IQ"
        : "Готово";
    return (
      <div className={styles.menu_title}>
        <img src={brain} alt="brain" width={50} />
        <h3 style={{ color: "#FFC700", margin: "auto" }}>{title}</h3>
      </div>
    );
  };

  return (
    <>
      <div
        className={`${styles.menu} ${
          menu ? styles.menuOpen : styles.menuClosed
        }`}
      >
        <nav className={styles.menuList}>
          <button onClick={() => dispatch(setMenu(false))}>x</button>
          <div className={styles.links}>
            <Link to="/" onClick={() => dispatch(setMenu(false))}>
              ГЛАВНАЯ
            </Link>
            <Link to="/" onClick={() => dispatch(setMenu(false))}>
              ИНФОРМАЦИЯ О ТЕСТЕ
            </Link>
            <Link to="/test" onClick={() => dispatch(setMenu(false))}>
              ПРОЙТИ ТЕСТ
            </Link>
          </div>
        </nav>
      </div>
      <header className={styles.headerStyle}>
        <div className={styles.burger} onClick={() => dispatch(setMenu(true))}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {window.location.href === "http://localhost:5173/test" ? (
          <MenuTitle />
        ) : (
          ""
        )}
        {window.location.href === "http://localhost:5173/result" ? (
          <MenuTitle />
        ) : (
          ""
        )}
      </header>
    </>
  );
}

export default Menu;
