import React from "react";

import FileInput from "./FileInput";
import ExtraInfo from "./ExtraInfo";

export default ({ onChange, error, loading, extraInfo }) => {
  return (
    <div className="row">
      <FileInput onChange={onChange} />
      <ExtraInfo extraInfo={extraInfo} error={error} loading={loading} />
    </div>
  );
};
