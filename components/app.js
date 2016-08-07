import React from 'react';
import Slider from 'react-slick';
import AppCardsCarousel from './appCardsCarousel.js'

class App extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
            <AppCardsCarousel />
      </div>
      );
  }
}

export default App;
