import React, { Component } from 'react';

var FontAwesome = require('react-fontawesome');

class MovieDetails extends Component {

  state = {
    highlighted: -1
  }

  highlightRate = high => evt => {
    this.setState({highlighted: high});
  }

  rateClicked = stars => evt => {
      //Fetch data
      fetch(`http://127.0.0.1:8000/api/movies/${this.props.movie.id}/rate_movie/`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization':'Token 0f56baca21f825e81f8f8f8f4182690737176cd7'
        },
        body: JSON.stringify({stars: stars + 1})
      }).then( resp => resp.json())
        .then( res => console.log(res))
        .catch(error => console.log(error))
    }



  render() {
    const mov = this.props.movie;

    return (
      <React.Fragment>
      {mov ? (
        <div>
          <h3>{mov.title}</h3>
          <FontAwesome name="star" className={mov.avg_rating > 0 ? 'orange' : ''}/>
          <FontAwesome name="star" className={mov.avg_rating > 1 ? 'orange' : ''}/>
          <FontAwesome name="star" className={mov.avg_rating > 2 ? 'orange' : ''}/>
          <FontAwesome name="star" className={mov.avg_rating > 3 ? 'orange' : ''}/>
          <FontAwesome name="star" className={mov.avg_rating > 4 ? 'orange' : ''}/>
          ({mov.no_of_ratings})
          <p>{mov.description}</p>

          <div className="rate-container">
            <h3> Rate it </h3>
            { [...Array(5)].map( (e, i) =>{
              return <FontAwesome key={i} name="star" className={this.state.highlighted > i -1 ? 'grey' : ''}
              onMouseEnter = {this.highlightRate(i)} onMouseLeave={this.highlightRate(-1)} onClick={this.rateClicked(i)}/>
            })}
          </div>
        </div>
      ) : null}
      </React.Fragment>
    )
  }
}

export default MovieDetails;
