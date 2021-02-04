import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  const [debounceTerm, setDebounceTerm] = useState(term);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebounceTerm(term);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const searchResponse = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });

      setResults(data.query.search);
    };

    searchResponse();
  }, [debounceTerm]);

  const renderedResults = results.map((result) => {
    let snippet = result.snippet
      .replace(/<span class="searchmatch">/g, "")
      .replace(/<\/span>/g, "");
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Enter Search term</label>
            <input
              className="input"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="ui very relaxed celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
