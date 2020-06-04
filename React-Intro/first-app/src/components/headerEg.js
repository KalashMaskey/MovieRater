import React from 'react';

function HeaderEg(props){
  return (
    <React.Fragment>
      <h2> The Header {props.info} </h2>
      <h3>{props.message} </h3>
    </React.Fragment>
  )
}

export default HeaderEg;
