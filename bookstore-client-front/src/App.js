import React from 'react';
import Header from './components/shared/headers/Header';
import './App.css';
import './components/shared/headers/headers.css';
import './css/style.css';
import 'antd/dist/antd.css';
import {Carousel} from 'antd';
import MainSlider from './components/shared/slider/MainSlider';

function App() {
  return (
    <div className="App">
	    <div className="wrapper" id="wrapper">
        <Header />
        <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
      </div>
    </div>
  );
}

export default App;
