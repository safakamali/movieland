import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "https://moviesapi.ir/api/v1/movies"

const movie1 = {
    "id": 114,
    "title": "Batman Begins",
    "poster": "https://moviesapi.ir/images/tt0372784_poster.jpg",
    "year": "2005",
    "country": "USA, UK",
    "imdb_rating": "8.3",
    "genres": [
        "Action",
        "Adventure"
    ],
    "images": [
        "https://moviesapi.ir/images/tt0372784_screenshot1.jpg",
        "https://moviesapi.ir/images/tt0372784_screenshot2.jpg",
        "https://moviesapi.ir/images/tt0372784_screenshot3.jpg"
    ]
}

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?q=${title}`)
        var data = await response.json()
        data = data.data;

        console.log(data)

        setMovies(data)


    }

    useEffect(() => {

        searchMovies('')

    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>


            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>


            {
                movies?.length > 0
                ? (
                    <div className='container'>
                    {movies.map((movie) => (<MovieCard movie={movie} />))}
                </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }



        </div>
    );
}

export default App;