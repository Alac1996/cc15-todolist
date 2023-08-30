import "./App.scss";
// import { FaHome } from "react-icons/fa";
import Header from "./Header";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import ListItem from "./components/ListItem";
import Lists from "./components/Lists";
import TodoHeader from "./components/Todo/TodoHeader";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoLists from "./components/Todo/TodoLists";

function App() {
  // <ListItem text="Inbox" ico={<FaInbox/>} active={true}/>
  const generalLists = [
    {
      id: 1,
      text: "Inbox",
      active: true,
      icon: <FaInbox />,
    },
    {
      id: 2,
      text: "Today",
      active: false,
      icon: <FaCalendar />,
    },
    {
      id: 3,
      text: "Next 7 Days",
      active: false,
      icon: <FaCalendarAlt />,
    },
  ];

  const projectLists = [
    {
      id: 1,
      text: "Project-A",
      icon: <FaInbox />,
      active: true,
    },
    {
      id: 2,
      text: "Project-B",
      icon: <FaInbox />,
      active: false,
    },
  ];

  // ObjectDetail => <ListItem ...ObjectDetail/>
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="Sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* Lists */}
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;

/*
Challenge : Refactor
-ให้ 2 section render UI ที่...
- Option A (2/5): render ต่างกัน <Lists/> กับ <Accordion/> : 
- Option B (4/5): render UI เดียวกัน เช่น <Lists isAccordion/>
- Option C (5/5): render UI <Lists/> ภายใต้ <Accordion> <Lists/> </Accordion>
// ใช้ props.children
*/
