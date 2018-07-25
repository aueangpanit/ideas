import React, { Component } from "react";
import TextField from "./TextField";

class TextFieldExtraInfo extends Component {
  renderLoading() {
    return (
      <div className="preloader-wrapper small active">
        <div className="spinner-layer">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      input,
      label,
      loading,
      extraInfo,
      meta,
      meta: { error }
    } = this.props;
    return (
      <div className="row">
        <TextField input={input} label={label} classSize="s6" meta={meta} />
        <div className="col s6" style={{ marginTop: "26px" }}>
          {loading ? this.renderLoading() : error ? "" : extraInfo}
        </div>
      </div>
    );
  }
}

export default TextFieldExtraInfo;
