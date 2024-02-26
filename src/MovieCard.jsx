import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>
                    {movie.year}
                </p>
            </div>
            <div>
                <img src={movie.poster !== "https://moviesapi.ir/images/"? movie.poster : "https://via.placeholder.com/400"} alt={movie.title} />
            </div>

            <div>
                <span>{movie.country}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard