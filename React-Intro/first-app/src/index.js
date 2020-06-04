import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import HeaderEg from './components/headerEg';
import FooterEg from './components/footerEg';
import {Route, BrowserRouter} from 'react-router-dom';

const context = React.createContext();
export const CtxConsumer = context.Consumer;

const animals = ['tiger','zebra','lion']

const routing = (
  <BrowserRouter>
    <context.Provider value={{animals: animals}}>
      <div>
        <Route exact path='/' component = {App} />
        <Route path='/headerEg' component = {HeaderEg} />
        <Route path='/footerEg' component = {FooterEg} />
      </div>
    </context.Provider>
  </BrowserRouter>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
