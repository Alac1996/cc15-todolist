// Dependencies
import { useState } from "react";
import "./App.scss";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
import TodoItem from "../components/Todo/TodoItem";
// import { Button } from "../components/Common/Button/Button";

const data = [
  {
    id: nanoid(),
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: nanoid(),
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: nanoid(),
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function App() {
  const [allTodo, setAllTodo] = useState(data);

  const addTodo = function (taskName) {
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };
    setAllTodo((p) => [newTodo, ...p]);
  };

  // delete
  const deleteTodo = function (todoId) {
    const updateTodo = allTodo.filter((todo) => todo.id !== todoId);
    //allTodo =[{id:1},{id:2},{id:3}]
    //todoId = 2
    //[{id:1},{id:2},{id:3}]
    //round 1 todo = {id:1} // 1 !== 2 ? => {id:1}
    //round 2 todo = {id:2} // 2 !== 2 ? =>
    //round 3 todo = {id:3} // 3 !== 2 ? => {id:3}
    //updateTodo = [{id:1},{id:3}]
    setAllTodo(updateTodo);
  };

  // Practice #1
  // let foundedIndex = allTodo.findIndex((todo) => todo.id === todoId);
  // if (foundedIndex !== -1) {
  //   const newTodoLists = [...allTodo];
  //   newTodoLists.splice(foundedIndex, 1);
  //   setAllTodo(newTodoLists);
  // }

  // Practice #2
  // const newTodoLists = allTodo.filter((todo) => todo.id !== todoId);
  // setAllTodo(newTodoLists);

  // edit
  const editTodo = function (todoId, newTodoObj) {
    // console.log(todoId,newTodoObj);
    // #Practice #1
    // let foundedTodo = allTodo.find((todo) => todo.id === todoId);
    // if (!foundedTodo) return;
    // const newTodo = Object.assign({}, foundedTodo, newTodoObj);

    // let foundedIndex = allTodo.findIndex((todo) => todo.id === todoId);
    // if (foundedIndex === -1) return;

    // const newTodoLists = [...allTodo];
    // newTodoLists.splice(foundedIndex, 1, newTodo);
    // setAllTodo(newTodoLists);

    // #Practice #2
    // const newTodoLists = allTodo.map(function (todo) {
    //   if (todo.id !== todoId) {
    //     return todo;
    //   } else {
    //     const newTodo = { ...todo, ...newTodoObj };
    //   }
    // });
    // setAllTodo(newTodoLists);

    // #Practice 3
    const newTodoLists = allTodo.reduce((acc, todo) => {
      if (todo.id !== todoId) acc.push(todo);
      else acc.push({ ...todo, ...newTodoObj });
      return acc;
    }, []);
    setAllTodo(newTodoLists);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists
            data={allTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
