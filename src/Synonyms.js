import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return <div>Synonyms: {props.synonyms}</div>;
  } else {
    return null;
  }
}
