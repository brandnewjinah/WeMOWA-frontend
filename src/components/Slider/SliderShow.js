import React, { Component } from "react";
import Slider from "react-slick";
import "./SliderShow.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderShow extends Component {
  state = {};
  render() {
    const prevArrow = (
      <img src="http://www.creativehunt.co/wp-content/uploads/2016/02/Previous-300x300.png" />
    );
    const nextArrow = (
      <img src="http://www.creativehunt.co/wp-content/uploads/2016/02/Next-300x300.png" />
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow,
      nextArrow,
    };
    return (
      <div className="SliderShow">
        <h2> Single Item</h2>
        <Slider {...settings}>
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
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderShow;
