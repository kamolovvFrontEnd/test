import { useEffect, useState } from "react";
import styles from "./Result.module.css";
import call from "../assets/call.svg";

function Result() {
  interface Employee {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  const [time, setTime] = useState(600);
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime: number) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  async function getData() {
    try {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const data = await response.json();
      console.log(data);

      setEmployee(data);
    } catch (err) {
      console.error(err);
    }
  }

  const EmployeeData = ({ data }: { data: Employee }) => {
    return (
      <div className={styles.employee_data}>
        <h3>Полное имя: {data.name}</h3>
        <h3>Рост: {data.height}</h3>
        <h3>Масса: {data.mass}</h3>
        <h3>Цвет волос: {data.hair_color}</h3>
        <h3>Цвет кожи: {data.skin_color}</h3>
        <h3>Цвет глаз: {data.eye_color}</h3>
        <h3>Год рождения: {data.birth_year}</h3>
        <h3>Пол: {data.gender}</h3>
      </div>
    );
  };

  return (
    <div className={styles.result_bg}>
      <h1>Ваш результат рассчитан:</h1>
      <h4>
        <span style={{ textDecorationLine: "underline" }}>
          Вы относитесь к 3%
        </span>{" "}
        респондентов, чей уровень интеллекта более чем на 15 пунктов отличается
        от среднего в большую или меньшую сторону!{" "}
      </h4>
      <h1 className={styles.text_green}>Скорее получите свой результат!</h1>
      <p className={styles.paragraph_style}>
        В целях защиты персональных данных результат теста, их подробная
        интерпретация и рекомендации доступны в виде голосового сообщения по
        звонку с вашего мобильного телефона
      </p>
      <p className={styles.text_green}>Звоните скорее, запись доступна всего</p>
      <h1 className={styles.text_green}>{formatTime(time)} минут</h1>
      <div className={styles.call} onClick={getData}>
        <img src={call} alt="call" />
        <p>Позвонить и прослушать результат</p>
      </div>

      {employee ? <EmployeeData data={employee} /> : ""}
    </div>
  );
}

export default Result;
