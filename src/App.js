import React from "react";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <Search />
      </div>
      <footer>
        <a href="https://github.com/jessicab26/react-dictionary">
          Open-source code
        </a>{" "}
        by <em>Jessica Brogden</em>
      </footer>
    </div>
  );
}

export default App;
