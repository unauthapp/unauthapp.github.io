import ReactGA from 'react-ga';

import Core from '../../config/core';

const init = () => {
  // Google Analytics Tracking init
  ReactGA.initialize(Core.GA_TRACK_ID); 
};


export default init;
