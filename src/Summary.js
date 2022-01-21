import React from "react";
import Meaning from "./Meaning";

import "./Definition.css";

export default function Summary(props) {
  if (props.results) {
    return (
      <div className="Summary">
        <span className="headword">{props.results.word}</span>
        <p>
          <strong>\ ` {props.results.phonetic} ` \</strong>
        </p>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
