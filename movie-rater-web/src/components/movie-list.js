import React from 'react';

function MovieList(props){

  return(
    <React.Fragment>
    {props.movies.map(movie => {
      return <h3 key={movie}>{movie}</h3>
    })}
    </React.Fragment>
  )
}

export default MovieList;
