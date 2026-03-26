import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    const isExist = favorites.some((fav) => fav.id === movie.id);
  
    if (isExist) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
      //React does:
      //“State changed → re-render all components using it”
      //So:
      //MovieCard runs again
      //useContext gets updated favorites
    }
  };
  return (
    <MovieContext.Provider value={{ favorites,toggleFavorite  }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;

-----------------------------------------------------------

import React, { useContext } from "react";
import MovieContext from "../Context/MovieContext";

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);

  //Think initially favorites = [] here...
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div>
      <p>{movie.name}</p>

      <button onClick={() => toggleFavorite(movie)}> {/* Runs only when clicked */}
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default MovieCard;

-------------------------------------------------------------------------------------------

import React, { useContext } from 'react'
import MovieContext from '../Context/MovieContext'
import MovieCard from "../components/MovieCard"

const Favorite = () => {

    const {favorites}=useContext(MovieContext)
  
    return (
    <div>
        {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
    </div>
  )
}
export default Favorite

