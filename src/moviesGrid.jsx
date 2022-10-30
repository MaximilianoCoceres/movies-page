import { MovieCard } from "./movieCard";
import movies from "./movies.json";
import styles from "./movieGrid.module.css";


export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}
