import React, { useState } from "react";
import Summary from "./Summary";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function textChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          spellCheck="true"
          autoCorrect="on"
          placeholder="Search a word..."
          autoFocus="on"
          onChange={textChange}
        />
      </form>
      <div className="hint text-center">
        Suggested words: sunset, heart, puzzle, etc.
      </div>
      <Summary results={results} />
    </div>
  );
}
