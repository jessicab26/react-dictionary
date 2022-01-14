import React, { useState } from "react";
import Definition from "./Definition";
import ArtWork from "./ArtWork";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0].shortdef);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const apiKey = "d7da3f99-8adc-47a2-9c15-842b5be5c2d4";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function textChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
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
      <ArtWork />
    </div>
  );
}
