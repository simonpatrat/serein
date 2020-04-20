import React from "react";
import { NavLink } from "react-router-dom";

import Icon from '../Icon';

const SidebarMenuItem = ({ item, classNames }) => {
  const {
    to,
    contentText,
    iconName,
  } = item;
  const itemClassNames = `nav-item${classNames ? " " + classNames : ""}`;
  const itemHasIcon = !!iconName;
  return (
    <li className={itemClassNames}>
      <NavLink className="nav-link" activeClassName="active" to={to} exact>
        {itemHasIcon && (
          <Icon
            iconName={iconName}
            classNames="nav-link__icon"
          />
        )}
        {contentText}
      </NavLink>
    </li>
  );
};

export default SidebarMenuItem;
