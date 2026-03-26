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
