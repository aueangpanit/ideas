import _ from "lodash";
import React from "react";

const renderItems = items => {
  return _.map(items, item => {
    return (
      <li key={item.text}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
};

const DropdownContent = ({ id, content }) => {
  return (
    <ul id={`${id}-${content.name}-content`} className="dropdown-content">
      {renderItems(content.contents)}
    </ul>
  );
};

export default DropdownContent;
