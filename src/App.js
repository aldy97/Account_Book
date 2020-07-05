import React from 'react';
import Header from './commons/header';
import Footer from './commons/footer';
import store from './store/index.js';
import Home from './pages/home/home.js';
import Stat from './pages/stat/index';
import Setting from './pages/setting/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/statistics' exact component={Stat}></Route>
          <Route path='/setting' exact component={Setting}></Route>
        </div>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
