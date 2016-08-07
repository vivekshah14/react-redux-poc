import React from 'react';
import Slider from 'react-slick';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appCardReducer from '../reducers/appCardReducer.js';
import AppCardsCarousel from './appCardsCarousel.js';

class App extends React.Component {

  render() {
    let trendingNowCarouselStore = createStore(appCardReducer);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Provider store = {trendingNowCarouselStore}>
            <AppCardsCarousel />
        </Provider>
      </div>
      );
  }
}

export default App;
