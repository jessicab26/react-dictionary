import React, { useState } from "react";
import Summary from "./Summary";
import Photos from "./Photos";
import axios from "axios";

import "./App.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001c13a1111bc1643c7ba632007c4012595";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function textChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          spellCheck="true"
          autoCorrect="on"
          placeholder="Search a word..."
          autoFocus="on"
          onChange={textChange}
        />
      </form>
      <div className="hint text-center">
        Suggested words: sunset, heart, puzzle, etc.
      </div>
      <Summary results={results} />
      <Photos photos={photos} />
    </div>
  );
}
