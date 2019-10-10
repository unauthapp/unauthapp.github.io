import ReactGA from 'react-ga';

const pageView = (pageUrl) => {
  ReactGA.pageview(pageUrl);
};

export default pageView;
