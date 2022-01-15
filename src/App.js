import React from "react";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        <Search />
      </div>
    </div>
  );
}

export default App;
