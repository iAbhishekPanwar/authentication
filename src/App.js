import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
    const requestOptions = {
      headers: {
        Accept: "application/json", // Set the Accept header to specify JSON content
      },
    };

    const response = await fetch(
      "https://anapioficeandfire.com/api/books/",
      requestOptions
    );
    const data = await response.json();

    const transformedMovies = data.map((movieData) => {
      return {
        id: movieData.isbn,
        title: movieData.name,
        openingText: movieData.publisher,
        releaseDate: movieData.released,
      };
    });
    setMovies(transformedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
