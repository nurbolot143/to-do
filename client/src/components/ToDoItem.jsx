import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
const toDoIcons = document.getElementsByClassName("deleteIcon");

const ToDoItem = (props) => {
  const handleChecked = (event) => {
    props.onCheck(event.target.checked ? 1 : -1);
  };

  return (
    <li className="day__item">
      <div className="day__wrapper">
        {props.text}
        <div style={{ display: "flex", alignItems: "center" }}>
          <DeleteIcon
            className="deleteIcon"
            color="primary"
            style={{
              fontSize: 30,
              cursor: "pointer",
            }}
            onClick={() => {
              props.onChecked(props.id);
            }}
          />
          {/* <Checkbox
            style={{
              fontSize: 30,
              cursor: "pointer",
            }}
            size="large"
            onChange={handleChecked}
          /> */}
          <input
            style={{ width: 30, height: 30 }}
            type="checkbox"
            onChange={handleChecked}
          />
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
