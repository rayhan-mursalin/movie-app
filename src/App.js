import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3ad13624`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	return (
		<div className='container-fluid movie-app'>
			<div className="row">
				<MovieList />
			</div>
		</div>
	)
}

export default App;
