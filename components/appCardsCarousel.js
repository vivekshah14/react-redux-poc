import React from 'react';
import { connect } from 'react-redux';
import RightArrow from './rightArrow.js';
import LeftArrow from './leftArrow.js';
import Slider from 'react-slick';

class AppCardsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {dispatch, appCardsList} = this.props;

    var appCards = appCardsList.appCardReducer.map((appCardVal, i) => {
      return (
        <div key={appCardVal.appName}>
          <a href={appCardVal.subscribeUrl}>
            <div className="home-bigappcard-class">
                <div className="home-bigappcard-inner">
                    <div className="appIcon size80">
                            <img src={appCardVal.imgUrl} className="themeColorAppCards" />
                    </div>
                    <div className="bigappcard-details">
                        <div className="bigappcard-display-name">
                            {appCardVal.appName}
                        </div>
                        <div className="bigappcard-vendor-name">
                            {appCardVal.appDeveloper}
                        </div>
                        <div className="bigappcard-tagline">
                            {appCardVal.appDesc}
                        </div>
                    </div>
                        <div className="ratings">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="review">
                                <span className="reviews">({appCardVal.numReviews})</span>
                            </span>
                        </div>
                </div>
            </div>
          </a>
        </div>
      )
    });
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='container'>
        <div className="app-header left headinglight">Trending Now</div>
        <Slider {...settings} nextArrow={ <RightArrow />} prevArrow={ <LeftArrow />}>
          {appCards}
        </Slider>
      </div>
      );
  }
}

function select(state) {
  return {
    appCardsList: state
  }
}

export default connect(select)(AppCardsCarousel);
