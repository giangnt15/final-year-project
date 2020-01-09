import React, { Fragment } from 'react';
import Header from './components/shared/headers/Header';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import 'antd/dist/antd.css';
import {Carousel} from 'antd';
import MainSlider from './components/shared/slider/MainSlider';
import SearchBox from './components/shared/search/SearchBox';

class App extends React.Component {
  render(){
  return (
    <Fragment>
    
      <Header />
      <SearchBox />
      <MainSlider />
    </Fragment>
       
  );
}
}

export default App;
