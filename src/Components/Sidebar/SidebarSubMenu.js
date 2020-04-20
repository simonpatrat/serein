import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";

import Icon from '../Icon';

const SidebarSubMenu = ({
  item,
  classNames,
  deepnessIndex,
  loopIndex,
  mapItemsRecusriveFunction,
}) => {
  const {
    contentText,
    iconName,
    items,
  } = item;
  const subMenuClassNames = `${classNames || ""}`;
  return (
    <li className={subMenuClassNames}>
      <Button
        key={`sidebar-nav-item-submenu-button-${contentText}#level${deepnessIndex}#${loopIndex}`}
        color="lib"
        className="sidebar-nav__btn--collapse"
        id={`sidebar-menu-item-collapse-${deepnessIndex}-${loopIndex}`}
      >
        {!!iconName && (
          <Icon
            iconName={iconName}
            classNames="sidebar-nav__btn--collapse__icon"
          />
        )}
        <span className="sidebar-nav__btn--collapse__text">
          {item.contentText}
        </span>
        <Icon
            iconName={'angle-down'}
            classNames="sidebar-nav__btn--collapse__icon sidebar-nav__btn--collapse__icon--arrow"
        />
      </Button>
      <UncontrolledCollapse
        key={`sidebar-nav-item-collapse-${contentText}#level${deepnessIndex}#${loopIndex}`}
        toggler={`sidebar-menu-item-collapse-${deepnessIndex}-${loopIndex}`}
      >
        <ul>{mapItemsRecusriveFunction(items, deepnessIndex)}</ul>
      </UncontrolledCollapse>
    </li>
  );
};

export default SidebarSubMenu;
