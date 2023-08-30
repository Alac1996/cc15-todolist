import "./App.scss";
// import { FaHome } from "react-icons/fa";
import Header from "./Header";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="Sidebar">
          <section className="sidebar__category">
            <ul className="list">
              <li className="list__item">
                <FaInbox className="list__icon__list" />
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                <FaInbox className="list__icon__list" />
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                <FaInbox className="list__icon__list" />
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                <FaInbox className="list__icon__list" />
                <p className="list__item__text">Inbox</p>
              </li>
            </ul>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
