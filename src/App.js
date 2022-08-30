// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import GameResults from "./components/games/GamesResults";
import requests from "./helpers/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchMLB);

  return (
    <div className="App">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <GameResults selectedOption={selectedOption} />
    </div>
  );
}

export default App;
