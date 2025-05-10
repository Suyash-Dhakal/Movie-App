import MovieCard  from '../components/MovieCard'; 
import { useState } from 'react';
import '../css/Home.css';

const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const movies=[
        {
            id:1,
            title:'Movie 1',
            url:'https://via.placeholder.com/150',
            release_date:'2023-01-01'
        },
        {
            id:2,
            title:'Movie 2',
            url:'https://via.placeholder.com/150',
            release_date:'2023-02-01'
        },
        {
            id:3,
            title:'Movie 3',
            url:'https://via.placeholder.com/150',
            release_date:'2023-03-01'
        }
    ];

    const handleSearch=(e)=>{
        e.preventDefault();
        setSearchQuery('');
    }

  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search'>
            <input 
            type="text" 
            placeholder='Search for movies...' 
            className='search-input'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>Search</button>
        </form>
      <div className='movies-grid'>
        {movies.
        filter(movie=>movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        .map(movie => <MovieCard movie={movie} key={movie.id}/>)
        }
      </div>
    </div>
  )
}

export default Home
