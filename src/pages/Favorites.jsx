import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useMovieContext();
  
  if(favorites.length > 0){
    return (
      <div className='favorites'>
        <div className='movies-grid'>
        {favorites.
        map((movie) => (<MovieCard movie={movie} key={movie.id}/>))
        }
      </div>
      </div>
    );
  }
  return (
    <div className='favorites-empty'>
      <h2>No Favorites Movies Yet</h2>
      <p>Start adding some movies to your favorites list!</p>
    </div>
  );
}

export default Favorites
