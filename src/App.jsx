
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieProvider from "./Context/MovieProvider";
import Favorite from "./pages/Favorite";

function App() {
  const Movies = [
    { id: 1, name: "Inception" },
    { id: 2, name: "Interstellar" },
  ];

  return (
    <MovieProvider>
      <h3>Movies</h3>
      {Movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Favorite/>
    </MovieProvider>
  );
}

export default App;
