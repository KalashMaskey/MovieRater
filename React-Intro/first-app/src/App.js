import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderEg from './components/headerEg';
import FooterEg from './components/footerEg';
import styled from 'styled-components';

function createAlert(){
  alert('Hello');
}

const pStyle = {
  fontSize: '2em',
  color: 'white',
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;`;

function App() {
  return (
    <div className="App">
        <p>
          <HeaderEg info="Is generated with Props"
            message="Props Example"/>
        </p>
        <p style={pStyle}>Some Content </p>
        <Paragraph> NEW </Paragraph>
        <FooterEg message="Class Props Example" myalert={createAlert}/>
    </div>
  );
}

export default App;
