import React from 'react';
var FontAwesome = require('react-fontawesome');


function MovieList(props){

  const movieClicked = movie => evt => {
    props.movieClicked(movie);
  };

  const removeClicked = movie => evt => {
    fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 0f56baca21f825e81f8f8f8f4182690737176cd7'
      },
    }).then( res => props.movieDeleted(movie))
      .catch(error => console.log(error))
  };

  return(
    <div>
    {props.movies.map(movie => {
      return (
        <div  key={movie.id} >
          <h3 onClick={movieClicked(movie)}>
              {movie.title}
          </h3>
          <FontAwesome name="edit"/>
          <FontAwesome name="trash" onClick={removeClicked(movie)}/>

        </div>
      )
    })}
    </div>
  )
}

export default MovieList;
