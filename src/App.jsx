
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieProvider from "./Context/MovieProvider";
import Favorite from "./pages/Favorite";

function App() {

   const [searchQuery, setSearchQuery] = useState("");
  const [movies,setMovies] = useState([
    { id: 1, name: "Inception" },
    { id: 2, name: "Interstellar" },
  ]);

  useEffect(() => {
  const filtered = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setMovies(filtered);
}, [searchQuery]);

  return (
    <MovieProvider>
      <h3>Movies</h3>

      <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Favorite/>
    </MovieProvider>
  );
}

export default App;
