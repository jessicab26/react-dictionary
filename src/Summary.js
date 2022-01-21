import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Definition.css";

export default function Summary(props) {
  if (props.results) {
    return (
      <div className="Summary">
        <span className="headword">{props.results.word}</span>
        <Phonetics phonetics={props.results.phonetics} />

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
