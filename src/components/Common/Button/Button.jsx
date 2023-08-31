import styles from "./Button.module.scss";

// Button(Obj)
// Button{text,active}
// Button({text,active,type})

export function Button({ onClick, text, active = true, type }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return (
    <button
      className={`${styles.btn} ${btnStyles}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
