import React from 'react';
import store from './store/index.js';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Stat from './pages/stat/index';
import Setting from './pages/setting/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Login}></Route>
          <Route path='/summary' exact component={Home}></Route>
          <Route path='/statistics' exact component={Stat}></Route>
          <Route path='/setting' exact component={Setting}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
