import React from "react";
import Search from "./Search";

import "./Definition.css";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="Definition">
        <h2>{props.results}</h2>
      </div>
    );
  } else {
    return null;
  }
}
