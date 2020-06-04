import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderEg from './components/headerEg';
import FooterEg from './components/footerEg';
import styled from 'styled-components';
import Numbers from './components/numbers';



function createAlert(){
  alert('Hello');
}

const pStyle = {
  fontSize: '2em',
  color: 'white',
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
  `;

function App() {
  return (
      <div className="App">
        <Numbers />
      </div>
  );
}

export default App;
