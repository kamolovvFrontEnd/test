import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsChecked } from "../store/reducer";
import styles from "./PicturesQuestion.module.css";

interface TestProps {
  picture: string;
  question: string;
  answers: string[] | number[];
}

function PicturesQuestion(props: TestProps) {
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
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>{question}</h2>
      <img src={picture} alt="img" max-width={300} className={styles.picture}/>;
      <div className={styles.radios}>
        {answers.map((item, i) => {
          const isChecked = selected === `option${i}`;
          return (
            <label
              style={{
                backgroundColor: `white`,
                border: `${isChecked ? "5px solid #FFC700" : "none"}`,
              }}
            >
              <input
                type="radio"
                name="radio"
                value={`option${i}`}
                checked={selected === `option${i}`}
                onChange={handleChange}
                className={styles.picture_radios}
              />
              <span className={styles.answer}>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default PicturesQuestion;
