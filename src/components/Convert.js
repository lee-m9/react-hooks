import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceText(text);
    }, 1000);

    //This function is a cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM", //this key only works when run from localhost:3000
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, debounceText]);

  return (
    <div className="content">
      <h3 className="header">{translatedText}</h3>
    </div>
  );
};

export default Convert;
