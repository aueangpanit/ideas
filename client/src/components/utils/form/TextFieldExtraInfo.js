import React from "react";
import TextField from "./TextField";
import ExtraInfo from "./ExtraInfo";

export default ({
  id,
  value,
  input,
  label,
  loading,
  extraInfo,
  meta,
  meta: { error }
}) => {
  return (
    <div className="row">
      <TextField
        id={id}
        value={value}
        input={input}
        label={label}
        classSize="s6"
        meta={meta}
      />
      <ExtraInfo loading={loading} error={error} extraInfo={extraInfo} />
    </div>
  );
};
