import React, {Component} from 'react';
import {CtxConsumer} from '../index';

class FooterEg extends Component{

  state = {
      text: 'hello',
      number: 35,
      isLoggedin: true,
  }

  changed = evt => {
    this.setState({text: evt.target.value});
    console.log(this.state.text);
  }

  render(){
    // const animals = [ 'cat', 'dog', 'cow']
    return (
      <CtxConsumer>
        {(context) => (
          <div>
              {context.animals.map(names => {
                return(
                  <div key={names}>
                    <h1> {names}</h1>
                  </div>
                );
              })}
          </div>
          )}
      </CtxConsumer>

      //   {this.state.number === 35 ? "yes":"no"}
      //
      //   {this.state.isLoggedin ? (
      //     <React.Fragment>
      //       <h3 onClick={this.props.myalert}>The Footer {this.props.message} </h3>
      //       <input value={this.state.text}
      //              onChange={this.changed} type='text'/>
      //     </React.Fragment>
      //   ) : (
      //     <React.Fragment>
      //       <h2>Please Login to see the content</h2>
      //     </React.Fragment>
      //   )
      // }
      //
      // </div>
    )
  }
}

export default FooterEg;
