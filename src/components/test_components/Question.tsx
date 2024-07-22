import { useState } from "react";
import styles from "./Question.module.css";
import { useDispatch } from "react-redux";
import { setIsChecked } from "../store/reducer";

interface TestProps {
  picture?: string;
  question: string;
  answers: string[] | number[];
}

function Question(props: TestProps) {
  const question = props.question;
  const picture = props.picture;
  const answers = [...props.answers];

  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelected(value);
    dispatch(setIsChecked(true));
  };

  return (
    <div className={styles.test}>
      <h2 style={{ textAlign: "center" }}>{question}</h2>
      {picture !== undefined ? (
        <img src={picture} alt="geometric picture" className={styles.picture} />
      ) : (
        ""
      )}
      <div className={styles.questions}>
        {answers.map((item, i) => {
          return (
            <label className={styles.radio_container}>
              <input
                type="radio"
                value={`option${i}`}
                checked={selected === `option${i}`}
                onChange={handleChange}
                className={styles.radio_input}
              />
              <span className={styles.radio_label}>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
