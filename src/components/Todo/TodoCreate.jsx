import styles from "./TodoCreate.module.scss";
import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import TodoForm from "./TodoForm";

/*
Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm

Concept : true ? <AddTask/> : ><TodoForm />


/*
CC2 - EVENT HANDLING
- เอาฟังก์ชั้นไปผูกติดกับ UI เพ่ื่อให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
- onClick : ต้อง Click ก่อน, FN ถึงจะรัน
- User ทำการคลิก 
- Browser จะเป็นคนเรียกใช้ฟังก์ชั่น โดยส่ง parameter มา 1 ตัว
handleClick(eventObject)
*/

/*
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้
ต้องใช้ State
*/

/*
CC-4 Array Destructuring
function myUseState(){
  return [5,9]
}
let [a,b] = myUseState
a === 5
b === 9
*/

/*
CC5 - React State (1ในฟังก์ชั่นของกลุ่ม React Hook)
const [state,setState] = useState(initialState:any)
//  element 1: current State
// element 2: Fn สำหรับ setState
// เมื่อ State เปลี่ยน Function Component จะ Rerender
// Rerender 1 ครั้ง == code ทั้งหมดใน FC จะถูฏรันใหม่ 1 ครั้ง
*/

// #1 : FC = Function Component (Render)
function TodoCreate(props) {
  // HOOK FN
  const [isOpenForm, setIsOpenForm] = useState(false);
  console.log(isOpenForm);

  // let active = true;

  // #2 : JS Function (Logic)
  const handleClick = function () {
    console.log("clicked");
    setIsOpenForm(!isOpenForm);
    // console.log("clicked",event);
    // active = !active;
    // console.log("clicked", active);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Add Task"
          setIsOpenForm={setIsOpenForm}
          data={props.data}
          addTodo={props.addTodo}
        />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
