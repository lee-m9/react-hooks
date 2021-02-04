import React from "react";

const TextColor = ({ color }) => {
  return (
    <div className="ui form">
      <div className="field">
        {/* <label style={{ color: color }} >This text color is {color.toUpperCase()}</label>  */}
        <label className={`ui label basic pointing ${color}`}>
          This text color is {color.toUpperCase()}
        </label>
      </div>
    </div>
  );
};

export default TextColor;
