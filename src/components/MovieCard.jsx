import React, { useContext } from 'react'
import MovieContext from "../Context/MovieContext"

const MovieCard = ({movie}) => {

    const {favorites,toggleFavorite}=useContext(MovieContext)

    //Think initially favorites = [] here...
    const isFavorite = favorites.some((fav) => fav.id === movie.id); 

   
    

  return (
    <div>
    <p>{movie.name}</p> 
   
    <button onClick={() => toggleFavorite(movie)}>  {/* Runs only when clicked */}
        {isFavorite ? "❤️" : "🤍"}
      </button>
      
    </div>
  )
}

export default MovieCard
