import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenuItem = ({ item, classNames }) => {
  const itemClassNames = `nav-item${classNames ? " " + classNames : ""}`;
  return (
    <li className={itemClassNames}>
      <NavLink className="nav-link" activeClassName="active" to={item.to}>
        {item.contentText}
      </NavLink>
    </li>
  );
};

export default SidebarMenuItem;
