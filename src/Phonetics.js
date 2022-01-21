import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <span className="me-3">\ {props.phonetics[0].text} </span>{" "}
      <span>
        <a
          href={props.phonetics[0].audio}
          target="_blank"
          alt="Listen to Word Pronunciation"
          title="Word Pronunciation"
        >
          <i class="fas fa-microphone"></i>
        </a>{" "}
        \
      </span>
    </div>
  );
}
