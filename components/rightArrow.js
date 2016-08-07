import React from 'react';

class RightArrow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div {...this.props} id="jscarousel-slider-back" className="appcenter-next fa fa-angle-right"></div>
      );
  }
}

export default RightArrow;
