import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Icon = ({ iconName, classNames }) => {
  if (!iconName) {
    return null;
  }
  const iconClassnames = classnames(
    "las",
    `la-${iconName}`,
    "icon",
    classNames
  );
  return <span className={iconClassnames}></span>;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

export default Icon;
