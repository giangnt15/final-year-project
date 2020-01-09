import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliders.css';

class SlickSlider extends React.Component {


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      slidesToShow: 4,
      arrows: true,
      accessibility: true,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    };
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    );
  }
}

export default SlickSlider;