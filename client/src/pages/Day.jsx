import React, { useState } from "react";
import InputArea from "../components/InputArea";
import ToDoItem from "../components/ToDoItem";
const navItems = document.getElementsByClassName("nav__percent");

const Day = () => {
  const [item, setItem] = useState([]);
  const [check, setCheck] = useState(0);

  const addItem = (inputText) => {
    setItem((prevItems) => [...prevItems, inputText]);
  };

  const deleteItem = (id) => {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  };

  const checkItem = (c) => {
    setCheck(check + c);
  };

  const percent = item.length > 0 ? (check * 100) / item.length : 0;

  if (navItems[0] !== undefined) {
    navItems[0].style.width = `${percent}%`;
  }

  return (
    <div className="day">
      <InputArea onAdd={addItem} />
      <ol className="day__list">
        {item.map((toDoItem, index) => {
          return (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
              onCheck={checkItem}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Day;
