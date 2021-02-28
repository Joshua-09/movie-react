import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex flex-column justify-content-start m-3'>
                    {/* <a href="/details"> */}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width='300' height='500' alt='movie'></img>
                    <h5>{movie.title}</h5>
                    <h5>{movie.release_date}</h5>
                    {/* </a> */}
					
				</div>
			))}
		</>
	);
};

export default MovieList;