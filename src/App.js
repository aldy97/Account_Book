import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';
import StatesHeader from './components/statsheader/index';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './static/iconfont/iconfont';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Footer />
      <StatesHeader />
      <GlobalStyle />
      <GlobalStyleFont />
    </Provider>
  );
}

export default App;
