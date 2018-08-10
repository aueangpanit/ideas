import React from "react";

export default ({ id, header, text, onClick, btnText }) => {
  return (
    <div id={id} className="modal">
      <div className="modal-content">
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
      <div className="modal-footer">
        <button
          onClick={onClick}
          className="modal-close waves-effect waves-green btn-flat"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};
