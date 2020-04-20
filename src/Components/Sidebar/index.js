import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledCollapse, Button } from "reactstrap";

import SidebarMenuItem from "./SidebarMenuItem";
import SidebarSubMenu from "./SidebarSubMenu";

import { sideBarMenu } from "../../config";

const mapItems = (items, deepness) => {
  const deepnessIndex = deepness || 0;
  return items.map((item, index) => {
    if (item.type === "link") {
      return (
        <SidebarMenuItem
          item={item}
          key={`sidebar-nav-item-${item.contentText}#level${deepnessIndex}#${index}`}
        />
      );
    }
    if (item.type === "submenu") {
      return (
        <SidebarSubMenu
          key={`sidebar-nav-item-submenu-${item.contentText}#level${deepnessIndex}#${index}`}
          item={item}
          loopIndex={index}
          deepnessIndex={deepnessIndex}
          mapItemsRecusriveFunction={mapItems}
        />
      );
    }

    return null;
  });
};

const SidebarMenu = () => {
  return (
    <ul className="nav flex-column sidebar-nav">
      {mapItems(sideBarMenu.items)}
    </ul>
  );
};

export default SidebarMenu;
