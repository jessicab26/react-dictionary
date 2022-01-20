import React from "react";
import Synonyms from "./Synonyms";

import "./Definition.css";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="Definition">
        <span className="headword">{props.results.word}</span>
        <span>{props.results.meanings[0].partOfSpeech}</span>
        <p>
          <strong>\ ` {props.results.phonetic} ` \</strong>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
