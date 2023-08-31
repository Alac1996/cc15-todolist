import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

/*
props = {
  textSubmit : string
}
*/
/*
CC1 - Form Handle

- ใช้ FN ไปผูฏกับ Event ชื่อ onSubmit
- FN จะถูก Browserเรียกใช้ (เมื่อไหร่ ?) โดยส่ง  parameter มา 1 ตัว (event Object)
- โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit
- วิธีแก้ ต้องกำหนด type ของปุ่ม
- type="Submit" : <button type="button">1</button>
- type="button" : <button type="submit">2</button>
*/

/*
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(true);
  const [taskInput, setTaskInput] = useState(" ");
  // console.log(taskInput);

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    // console.log("user typing...", event.target.value);
    setTaskInput(event.target.value);
    // console.log(taskInput);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // console.log("submit");
    // 2.ต้องรู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state : taskInput)

    // 3.FormValidation
    // case1 : submit
    // case2 : submit ไม่ได้ => แสดง Error
    if (taskInput.trim() === "") {
      console.log("Error");
      setIsError(true);
      return;
    }
    console.log("submit");
  };

  const handleCancel = function () {
    console.log("cancel");
    // setIsOpenForm(false)
    // correctName : setIsOpenForm(false)
    // inCorrectName : undefined(false) => บู้มเป็นโกโก้ครั้นช์
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChangeInput}
      />
      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
          {/* <button type="button" onClick={handleCancel}>
            POC
          </button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
