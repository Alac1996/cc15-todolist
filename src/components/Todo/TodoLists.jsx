// import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

/*
SCHEMA
todoObj={id:number, task:string, status:boolean, due_date:string}

data = Array[] {id:number, task:string, status:boolean, due_date:string}
หรือ data = Array[] todoObj

dataRender = Array[] <TodoItem task=... done=... date=.... /> 
*/

function TodoLists(props) {
  // CRUD = Create-Read-Update-Delete

  // RenderList # 1
  // const dataRender = data.map((todoObj) => (
  //   <TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date} />
  // ));

  // return <ul className={styles.todo__lists}>{dataRender}</ul>;

  // RenderList #2
  return (
    <ul className={styles.todo__lists}>
      {props.data.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      ))}
    </ul>
  );

  // RenderList #3
  // return (
  //   <ul className={styles.todo__lists}>
  //     {data.map(({ id, task, status, due_date }) => (
  //       <TodoItem key={id} task={task} done={status} date={due_date} />
  //     ))}
  //   </ul>
  // );
}

export default TodoLists;
