import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <span>
              <strong>Sample Sentence:</strong>
            </span>{" "}
            <span className="sentence">
              <em>"{definition.example}"</em>
            </span>
            <br />
            <p>
              <strong>Synonyms:</strong>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
