import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="speech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <strong>Definition entry:</strong> {definition.definition}
            </span>
            <div>
              <span>
                <strong>Sentence:</strong>
              </span>{" "}
              <span className="sentence">
                <em>"{definition.example}"</em>
              </span>
            </div>
            <Synonyms synonyms={definition.synonyms} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
