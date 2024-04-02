import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import MovieCard from './MovieCard.jsx';
import SearchIcon from './search.svg';


// API key = c35a5ed8

const API_URL = 'http://www.omdbapi.com?apikey=c35a5ed8'

const movie1 = {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {


        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);


    }
    useEffect(()=>{
        searchMovies('Spiderman')

    }, []);

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 
                ? 
                (
                    <div className="container">
                        {
                            movies.map((movie) =>(
                                <MovieCard movie={movie}></MovieCard>
                            ))
                        }
                        {/* <MovieCard movie1={movies[0]}/> */} 
                    </div>
                ) 
                :
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
                
            }


        </div>
    );
};

export default App;
