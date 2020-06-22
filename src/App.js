import React from 'react';
import Header from './commons/header/index';
import Footer from './commons/footer/index';
import store from './store/index.js';
import Home from './pages/home/index';
import Stat from './pages/stat/index';
import Setting from './pages/setting/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './static/iconfont/iconfont';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/stat' exact component={Stat}></Route>
          <Route path='/setting' exact component={Setting}></Route>
        </div>
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
      <GlobalStyleFont />
    </Provider>
  );
}

export default App;
