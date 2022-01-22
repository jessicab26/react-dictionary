import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span>
        <a
          href={props.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
          alt="Listen to Word Pronunciation"
          title="Word Pronunciation"
        >
          <i class="fas fa-microphone"></i>
        </a>{" "}
      </span>
      <span className="ms-2">\ {props.phonetics[0].text} \</span>{" "}
    </div>
  );
}
