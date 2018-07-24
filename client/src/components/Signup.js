import React from "react";

export default () => {
  return (
    <div>
      Signup
      <br />
      <label className="btn waves-effect waves-light">
        <i class="material-icons left">cloud</i>upload photo
        <input type="file" style={{ display: "none" }} />
      </label>
    </div>
  );
};
