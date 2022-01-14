import React from "react";
import Search from "./Search";

export default function Definition(props) {
  console.log(props.results);
  return <div className="Definition">{props.results.shortdef[0]}</div>;
}
