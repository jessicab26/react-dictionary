import React, { useState } from "react";
import Definition from "./Definition";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults({
      definitionOne: response.data[0].shortdef[0],
      definitionTwo: response.data[0].shortdef[1],
      definitionThree: response.data[0].shortdef[2],
      headword: response.data[0].hwi.hw,
      label: response.data[0].fl,
      pronunciation: response.data[0].hwi.prs[0].mw,
      synonyms: response.data[0].syns[0].pt[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "d7da3f99-8adc-47a2-9c15-842b5be5c2d4";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function textChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-11">
            <input
              type="search"
              className="form-control"
              spellCheck="true"
              autoCorrect="on"
              placeholder="Search a word..."
              autoFocus="on"
              onChange={textChange}
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Definition results={results} />
    </div>
  );
}
