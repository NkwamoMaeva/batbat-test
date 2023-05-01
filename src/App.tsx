import React from "react";
import Searchbar from "./components/searchbar/Searchbar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <div className="search-box">
          <h2>Recherchez vos voyages, trajets courts et bien plus encore...</h2>
          <Searchbar></Searchbar>
        </div>
      </header>
    </div>
  );
}

export default App;
