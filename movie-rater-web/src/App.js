import React, { Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';


  class App extends Component {

  movies =['Titanic','Avatar'];

  componentDidMount() {
    //Fetch data
    fetch('127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization':'Token 413682aa1703c20a46123b90af510304e55b9cab'
      }
    }).then( resp => console.log(resp))
    .catch(error => console.log(error))
  }

    render(){
        return (
          <div className="App">
              <h1>Movie Rater</h1>
              <MovieList movies={this.movies}/>
          </div>
        );
      }
    }

export default App;
