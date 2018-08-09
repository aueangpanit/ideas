import React from "react";

export default ({ id, content, text }) => {
  return (
    <a
      className="dropdown-trigger"
      data-target={`${id}-${content.name}-content`}
    >
      {text}
      <i className="material-icons right">arrow_drop_down</i>
    </a>
  );
};
