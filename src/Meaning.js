import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <strong>Definition entry</strong> ({props.meaning.partOfSpeech}):{" "}
              {definition.definition}
            </span>
            <div>
              <strong>Sample Sentence:</strong>
            </div>{" "}
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
