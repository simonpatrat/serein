import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Button } from "reactstrap";
import classnames from "classnames";

import Icon from "../Icon";

const SidebarSubMenu = ({
  item,
  classNames,
  deepnessIndex,
  mapItemsRecusriveFunction,
}) => {
  const { contentText, iconName, items } = item;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const subMenuClassNames = `${classNames || ""}`;
  const buttonClassNames = classnames("sidebar-nav__btn--collapse", {
    opened: isOpen,
  });
  return (
    <li className={subMenuClassNames}>
      <Button color="lib" className={buttonClassNames} onClick={toggle}>
        {!!iconName && (
          <Icon
            iconName={iconName}
            classNames="sidebar-nav__btn--collapse__icon"
          />
        )}
        <span className="sidebar-nav__btn--collapse__text">{contentText}</span>
        <Icon
          iconName={"angle-down"}
          classNames="sidebar-nav__btn--collapse__icon sidebar-nav__btn--collapse__icon--arrow"
        />
      </Button>
      <Collapse isOpen={isOpen}>
        <ul>{mapItemsRecusriveFunction(items, deepnessIndex)}</ul>
      </Collapse>
    </li>
  );
};

SidebarSubMenu.propTypes = {
  item: PropTypes.shape({
    contentText: PropTypes.string,
    iconName: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        contentText: PropTypes.string,
        iconName: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
      })
    ),
  }),
  classNames: PropTypes.string,
  deepnessIndex: PropTypes.number,
  mapItemsRecusriveFunction: PropTypes.func,
};

export default SidebarSubMenu;
