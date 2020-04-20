import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";

const SidebarSubMenu = ({
  item,
  classNames,
  deepnessIndex,
  loopIndex,
  mapItemsRecusriveFunction,
}) => {
  const subMenuClassNames = `${classNames || ""}`;
  return (
    <li className={subMenuClassNames}>
      <Button
        key={`sidebar-nav-item-submenu-button-${item.contentText}#level${deepnessIndex}#${loopIndex}`}
        color="lib"
        className="sidebar-nav__btn--collapse"
        id={`sidebar-menu-item-collapse-${deepnessIndex}-${loopIndex}`}
        style={{ marginBottom: "1rem" }}
      >
        {item.contentText}
      </Button>
      <UncontrolledCollapse
        key={`sidebar-nav-item-collapse-${item.contentText}#level${deepnessIndex}#${loopIndex}`}
        toggler={`sidebar-menu-item-collapse-${deepnessIndex}-${loopIndex}`}
      >
        <ul>{mapItemsRecusriveFunction(item.items, deepnessIndex)}</ul>
      </UncontrolledCollapse>
    </li>
  );
};

export default SidebarSubMenu;
