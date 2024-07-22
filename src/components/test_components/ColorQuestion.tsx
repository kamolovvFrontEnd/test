import { useState } from "react";
import styles from "./ColorQuestion.module.css";
import { useDispatch } from "react-redux";
import { setIsChecked } from "../store/reducer";

interface TestProps {
  question: string;
  answers: string[];
}

function ColorQuestion(props: TestProps) {
  const question = props.question;
  const answers = [...props.answers];

  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelected(value);
    dispatch(setIsChecked(true));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>{question}</h2>
      <div className={styles.radios}>
        {answers.map((item, i) => {
          const isChecked = selected === `option${i}`;
          return (
            <label
              style={{
                backgroundColor: `${item}`,
                border: `${isChecked ? "5px solid #FFC700" : "none"}`,
              }}
            >
              <input
                type="radio"
                name="radio"
                value={`option${i}`}
                checked={selected === `option${i}`}
                onChange={handleChange}
                style={{height: `${isChecked ? "70px" : ""}`}}
                className={styles.color_radios}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default ColorQuestion;
