import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './src/components/LoginPage';
import Guidelines from './src/components/Guidelines';
import Questions from './src/components/Questions';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loadToStore from './src/reducers/reducers';

let store = createStore(loadToStore);

ReactDOM.render(<LoginPage />, document.getElementById('app'));
ReactDOM.render((
  <Provider store = {store}>
     <Router history = {browserHistory}>
        <Route path = "/" component = {LoginPage}/>
        <Route path = "guidelines" component = {Guidelines} />
        <Route path = "questions" component = {Questions} />
     </Router>
   </Provider>
), document.getElementById('app'));
