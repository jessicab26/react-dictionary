import React, { useState } from "react";
import Definition from "./Definition";
import ImageSearch from "./ImageSearch";

import "./App.css";

export default function Search() {
  let [keyword, setKeyword] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
              autofocus="on"
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
