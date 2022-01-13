import React, { useState } from "react";
import Definition from "./Definition";
import ImageSearch from "./ImageSearch";
import axios from "axios";

import "./App.css";

export default function Search() {
  let [keyword, setKeyword] = useState(" ");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
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
      <Definition />
      <ImageSearch />
    </div>
  );
}
