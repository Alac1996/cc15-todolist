import "./ListItem.scss";
// import { FaInbox } from "react-icons/fa";

/*
props = {
    text : string
    icon : <Component/>
    active : boolean
}
*/
function ListItem(props) {
  console.log(props);

  const listClassName = `list__item ${props.active ? "active" : ""}`;
  // active=false => textClassName = "list__item__text"
  // active=true => textClassName = "list__item__text active"
  return (
    <li className={listClassName}>
      {props.icon}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

// CSS + JS Value == DynamicsClassName
// not-active : className = 'list_item_text'
// active : className = 'list__item__text active'

export default ListItem;
