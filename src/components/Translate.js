import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
        options={options}
      />
      <h4 className="header">Output</h4>
      <div className="ui segment">
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
