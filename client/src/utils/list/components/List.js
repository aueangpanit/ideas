import React from "react";

import Loading from "./snippets/Loading";

export default ({ loading, title, listItems, reachedEnd }) => {
  return (
    <React.Fragment>
      {loading ? <Loading /> : null}
      <div className="container">
        <h4 className="red-text text-lighten-2">{title}</h4>
        <div className="row">{listItems}</div>
        <div className="row center-align">
          {reachedEnd ? "You have reached the end!" : ""}
        </div>
      </div>
    </React.Fragment>
  );
};
