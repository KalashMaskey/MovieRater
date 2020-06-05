import React, { Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';


  class App extends Component {

  state = {
    movies: [] ,
    selectedMovie: null
  }

  componentDidMount() {
    //Fetch data
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization':'Token 413682aa1703c20a46123b90af510304e55b9cab'
      }
    }).then( resp => resp.json())
      .then( res => this.setState({movies:res}))
      .catch(error => console.log(error))
  }


loadMovie = movie => {
    this.setState(
      { selectedMovie: movie }
    )
  }

    render(){
        return (
          <div className="App">
              <h1>Movie Rater</h1>
              <div className="layout">
                <MovieList movies={this.state.movies} movieClicked={this.loadMovie}/>
                <MovieDetails movie={this.state.selectedMovie} updateMovie={this.loadMovie}/>
              </div>
          </div>
        );
      }
    }

export default App;
