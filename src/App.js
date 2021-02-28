import React from 'react';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import logo from './logo.svg';
import './App.css';
import MovieList from './API/MovieList';
import './App.css';
import SearchBox from './components/SearchBox';
import { Details } from './Details';

class Movies extends React.Component{
  render(){
    return <nav>
      <ul>
        <li>hello</li>
      </ul>
    </nav>
  }
}

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('a');
  const getMovieRequest = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=e63c822c5648e5af78fc3af34bc1fe4b&query=${searchValue}&page=1`;   
    const response = await fetch(url);
		const responseJson = await response.json();
    

		if (responseJson.results) {
			setMovies(responseJson.results);
		}
	};  

  // console.log("hello world",movies);

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    
      <React.Fragment>
  <Router>
    <NavigationBar searchValue={searchValue} setSearchValue={setSearchValue} />
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    <div className='container-fluid movie-app'>
      <div className="row">
    <MovieList movies={movies} />
		</div>
    </div>
    <Route path="/details" component={Details} />
    
    <Details movies={movies}/>
  {/* <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route component={NoMatch} /> */}

  </Router>
</React.Fragment>

  );
}

export default App;
