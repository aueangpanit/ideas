import React from "react";
import TextField from "./TextField";
import ExtraInfo from "./ExtraInfo";

export default ({
  input,
  label,
  loading,
  extraInfo,
  meta,
  meta: { error }
}) => {
  return (
    <div className="row">
      <TextField input={input} label={label} classSize="s6" meta={meta} />
      <ExtraInfo loading={loading} error={error} extraInfo={extraInfo} />
    </div>
  );
};
