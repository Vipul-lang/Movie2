import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    const isExist = favorites.some((fav) => fav.id === movie.id);
    console.log("isExist",isExist);
    
    
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
