import React from "react";
import "../App.css";
import HomePage from "./HomePage";
import Header from "./Header";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <MovieCard />
    </div>
  );
}

export default App;
