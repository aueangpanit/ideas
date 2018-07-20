import _ from "lodash";
import React from "react";

const items = [
  { text: "Login With Google", link: "#" },
  { text: "Login With Facebook", link: "#" },
  { text: "Login With Email", link: "#" }
];

const renderItems = items => {
  return _.map(items, item => {
    return (
      <li key={item.text}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
};

const LoginDropdownContent = ({ id }) => {
  return (
    <ul id={`${id}-dropdown-content`} className="dropdown-content">
      {renderItems(items)}
    </ul>
  );
};

export default LoginDropdownContent;
