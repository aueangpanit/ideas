import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";

import utils from "../../utils";
const { LINK_TYPE } = utils.data;

const renderItems = items => {
  return _.map(items, item => {
    if (item.type === LINK_TYPE.link) {
      return (
        <li key={item.text}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      );
    }

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
