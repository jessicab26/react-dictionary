import React from "react";
import Definition from "./Definition";

import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="d-flex justify-content-center">
        <div className="row">
          <div className="col-11">
            <input
              type="search"
              className="form-control"
              spellCheck="true"
              autoCorrect="on"
              placeholder="Search a word..."
              autofocus="on"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Definition />
    </div>
  );
}
