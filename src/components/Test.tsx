import { useEffect, useState } from "react";
import { useDataSelector } from "../hook/useDataSelector";
import { useDispatch } from "react-redux";
import { setIsChecked } from "./store/reducer";
import Question from "./test_components/Question";
import ColorQuestion from "./test_components/ColorQuestion";
import PicturesQuestion from "./test_components/PicturesQuestion";
import styles from "./Test.module.css";
import correctFigure from "../assets/firstQuestionWithImg.svg";
import geometricFigure from "../assets/geometricFigure.svg";
import suitableNumber from "../assets/suitableNumber.svg";
import ProcessingOfResults from "./test_components/ProcessingOfResults";

function Test() {
  const [rangeValue, setRangeValue] = useState(1);
  const { isChecked } = useDataSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    const rangeInput = document.querySelector(".rangeInput") as HTMLElement;
    if (rangeInput) {
      rangeInput.style.setProperty("--fill", `${rangeValue}%`);
      rangeInput.setAttribute("data-value", `${rangeValue}`);
    }
  }, [rangeValue]);

  const q1 = {
    question: "Ваш пол:",
    answers: ["Мужской", "Женский"],
  };
  const q2 = {
    question: "Укажите ваш возраст:",
    answers: ["До 18", "От 18 до 28", "От 29 До 35", "От 36"],
  };
  const q3 = {
    question: "Выберите лишнее:",
    answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
  };
  const q4 = {
    question: "Продолжите числовой ряд: 18 20 24 32",
    answers: [62, 48, 74, 57, 60, 77],
  };
  const q5 = {
    question: "Выберите цвет, который сейчас наиболее Вам приятен:",
    answers: [
      "grey",
      "blue",
      "green",
      "red",
      "yellow",
      "brown",
      "black",
      "purple",
      "aqua",
    ],
  };
  const q6 = {
    question:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    answers: [
      "grey",
      "aqua",
      "brown",
      "green",
      "black",
      "red",
      "purple",
      "yellow",
      "blue",
    ],
  };
  const q7 = {
    question: "Какой из городов лишний?",
    answers: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Отава"],
  };
  const q8 = {
    picture: correctFigure,
    question: "Выберите правильную фигуру из четырёх пронумерованных.",
    answers: [1, 2, 3, 4],
  };
  const q9 = {
    question: "Вам привычнее и важнее",
    answers: [
      "Наслаждаться каждой минутой проведенного времени",
      "Быть устремленными мыслями в будущее",
      "Учитывать в ежедневной практике прошлый опыт",
    ],
  };
  const q10 = {
    picture: geometricFigure,
    question:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
    answers: [
      "Оно остроконечное",
      "Оно устойчиво",
      "Оно-находится в состоянии равновесия",
    ],
  };
  const q11 = {
    picture: suitableNumber,
    question: "Вставьте подходящее число",
    answers: [34, 36, 53, 44, 66, 42],
  };

  const allQuestions = () => {
    switch (rangeValue) {
      case 1:
        return <Question question={q1.question} answers={q1.answers} />;
      case 2:
        return <Question question={q2.question} answers={q2.answers} />;
      case 3:
        return <Question question={q3.question} answers={q3.answers} />;
      case 4:
        return <Question question={q4.question} answers={q4.answers} />;
      case 5:
        return <ColorQuestion question={q5.question} answers={q5.answers} />;
      case 6:
        return <ColorQuestion question={q6.question} answers={q6.answers} />;
      case 7:
        return <Question question={q7.question} answers={q7.answers} />;
      case 8:
        return (
          <PicturesQuestion
            picture={q8.picture}
            question={q8.question}
            answers={q8.answers}
          />
        );
      case 9:
        return <Question question={q9.question} answers={q9.answers} />;
      case 10:
        return (
          <Question
            picture={q10.picture}
            question={q10.question}
            answers={q10.answers}
          />
        );
      case 11:
        return (
          <PicturesQuestion
            picture={q11.picture}
            question={q11.question}
            answers={q11.answers}
          />
        );
      case 12:
        return <ProcessingOfResults />;
    }
  };

  console.log(rangeValue);

  return (
    <div className={styles.testBackground}>
      <input type="range" min={0} max={12} step={1} value={rangeValue} />

      {allQuestions()}

      {rangeValue < 12 ? (
        <button
          className={!isChecked ? styles.btn_next_disabled : styles.btn_next}
          disabled={!isChecked}
          onClick={() => {
            setRangeValue(rangeValue + 1), dispatch(setIsChecked(false));
          }}
        >
          Далее
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Test;
