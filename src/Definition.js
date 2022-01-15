import React from "react";
import Search from "./Search";

import "./Definition.css";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="Definition">
        <span>{props.results.headword}</span> <span>{props.results.label}</span>
        <div>
          <h5>\ {props.results.pronunciation}\</h5>
        </div>
        <div>
          Definition of <em>{props.results.headword}</em>
        </div>
        <ol>
          <li>{props.results.definitionOne}</li>
          <li>{props.results.definitionTwo}</li>
          <li>{props.results.definitionThree}</li>
        </ol>
      </div>
    );
  } else {
    return null;
  }
}
