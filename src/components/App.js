import React from "react";
import "../App.css";
import { HomePage } from "./HomePage";
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

/*

1. Browse trending and popular movies, and search all movies by title

2. View relevant details of a particular movie including but not limited to title, overview, release year, runtime and cast members

3. View details of specific actor or actress including but not limited to name, bio, birth date and list of movies in which have worked

4. Ensure proper navigation between screens

5. Feel free to use CSS frameworks like Bootstrap, Material UI or any other CSS framework

6. Feel free to use client-side state management libraries such as Flux or Redux

7. Add relevant code comments and modularise the code properly

8. Use git source control system and make nice commits with proper commit messages

*/
