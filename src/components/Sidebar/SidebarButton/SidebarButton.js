import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import css from "./SidebarButton.module.css";

function SidebarButton(props) {
  const location = useLocation()

  const isActive = location.pathname === props.to

  const btnClass = isActive ? `${css.btn_body} ${css.active}` : `${css.btn_body}`
    return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider
          value={{ size: "24px", className: `${css.btn_icon}` }}
        >
          {props.icon}
          <p className={css.btn_title}>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

export default SidebarButton;
