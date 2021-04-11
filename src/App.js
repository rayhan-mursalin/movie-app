import React, { useState } from 'react';
import './App.css';


const App = () => {
	const [movies, setMovies] = useState([]);

	return (
		<MovieList></MovieList>
	)
}

export default App;
