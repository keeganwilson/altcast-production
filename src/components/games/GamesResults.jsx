// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./Results.css";
import GameCard from "./GameCard";
import axios from "../../helpers/axios";
import FlipMove from "react-flip-move";

const GameResults = ({ selectedOption }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setGames(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </FlipMove>
    </div>
  );
};

export default GameResults;
