import React from "react";
import Synonyms from "./Synonyms";

import "./Definition.css";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="Definition">
        <span className="headword">{props.results.headword}</span>{" "}
        <span className="label">{props.results.label}</span>
        <div>
          <h5>\ {props.results.pronunciation}\</h5>
        </div>
        <div className="meanings">
          Definition(s) of <em>{props.results.headword}</em>
        </div>
        <ol>
          <li>{props.results.definitionOne}</li>
          <li>{props.results.definitionTwo}</li>
          <li>{props.results.definitionThree}</li>
        </ol>
        <Synonyms synonyms={props.results.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
