import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  let str = inputText.replace(/\s+/g, "");

  return (
    <div className="form">
      <TextField
        sx={{ width: "350px" }}
        id="outlined-basic"
        label="Задача"
        variant="outlined"
        onChange={handleChange}
        value={inputText}
      />
      <AddBoxIcon
        onClick={() => {
          if (str) {
            props.onAdd(inputText);
            setInputText("");
          }
        }}
        style={{ fontSize: 50, cursor: "pointer" }}
        color="primary"
        className="form__btn"
      />
    </div>
  );
};

export default InputArea;
