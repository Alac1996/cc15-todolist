import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";
import { nanoid } from "nanoid";

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
  const [taskInput, setTaskInput] = useState(props.oldTodo?.task || "");
  // console.log(taskInput);

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    // console.log("user typing...", event.target.value);
    setTaskInput(event.target.value);
    // console.log(taskInput);
  };

  // 2 MODE : Add or Edit
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
    if (props.addTodo) props.addTodo(taskInput);
    else if (props.editTodo && props.oldTodo) {
      props.editTodo(props.oldTodo.id, { task: taskInput });
    }
    // create NewTodo
    // 1-ส่ง Request ไปหลังบ้านเพื่อ save ลง Database
    // 2-ทำการอัพเดท State ของ AllTodo === React ทำการ Rerender
    // data = []
    // data = [{id:number, task:string, status:boolean,due_date:YYYY-MM-DD}]
    // oldState = [{o},{o},{o}]
    // newState = [{n},{o},{o},{o}]
    // const newTodo = {
    //   id: nanoid(),
    //   task: taskInput,
    //   status: false,
    //   due_date: "2023-01-09",
    // };
    // const newTodoLists = [newTodo,...props.data];
    // END LOGIC : For CreateTODO

    // Update State
    // props.setTodo((prev) => [newTodo, ...prev]);

    // send taskInput to addTodo
    // props.addTodo(taskInput);

    props.setIsOpenForm(false);
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
