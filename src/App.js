import React from "react";
import Board from "./components/Board";
import "./styles/root.scss";

const App = () => {
  return (
    <div className="app">
      <h1>Xs & Os</h1>
      <Board />
    </div>
  );
};

export default App;