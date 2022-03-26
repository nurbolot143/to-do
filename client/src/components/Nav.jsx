import React from "react";
import { Link } from "react-router-dom";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const Nav = (props) => {
  return (
    <div className="nav">
      <h2 className="nav__title">Дни недели</h2>
      <div className="nav__wrapper">
        {days.map((el, idx) => {
          return (
            <Link to={`/${el}`} key={`${idx}__${el}`} className="nav__link">
              {el} <span className="nav__percent"></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
