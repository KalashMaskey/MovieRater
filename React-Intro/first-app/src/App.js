import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderEg from './components/headerEg'
import FooterEg from './components/footerEg'

function createAlert(){
  alert('Hello');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <HeaderEg info="Is generated with Props"
            message="Props Example"/>
        </p>
        <p>Some Content </p>
        <FooterEg message="Class Props Example" myalert={createAlert}/>
      </header>
    </div>
  );
}

export default App;
