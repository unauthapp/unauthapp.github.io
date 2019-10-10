import React from 'react';

import { Landing } from '../components/containers';
import { ToastManager } from '../lib';
import { ROUTES, CONSTANTS, MESSAGES } from '../constants';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [CONSTANTS.KEYS.CHROME_ACTIVE]: false,
      [CONSTANTS.KEYS.FIREFOX_ACTIVE]: false,
      [CONSTANTS.KEYS.ROUTE]: ''
    }

    this.setSelected = this.setSelected.bind(this);
    this.onChoose = this.onChoose.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getActiveRoute(chromeActive, firefoxActive) {
    if (chromeActive) {
      return ROUTES.CHROME_EXTENSION
    }

    if (firefoxActive) {
      return ROUTES.FIREFOX_ADDON
    }

    return '';
  }


  onChoose(event) {
    const target = event.currentTarget || event.target;
    if (target) {
      const id = target.id;

      this.setSelected({
        [id]: true
      })
    }
  }


  setSelected({ chromeActive = false, firefoxActive = false }) {
    this.setState({ chromeActive, firefoxActive });
  }


  onClick() {
    const { chromeActive, firefoxActive } = this.state;

    // Validating if any option is selected
    if (!chromeActive && !firefoxActive) {
      ToastManager.fail(MESSAGES.ERROR.CHOOSE_ONE)
      return;
    }

    // Validating if selected option route is available
    const route = this.getActiveRoute(chromeActive, firefoxActive);
    if (!route || route.length === 0) {
      ToastManager.fail(MESSAGES.ERROR.CHOOSE_ONE);
      this.setState({
        [CONSTANTS.KEYS.CHROME_ACTIVE]: false,
        [CONSTANTS.KEYS.FIREFOX_ACTIVE]: false
      });

      return;
    }

    window.open(route, '_blank')
  }

  render() {

    const { chromeActive, firefoxActive } = this.state;
    return (
      <React.Fragment>
        <Landing
          chromeActive={chromeActive}
          firefoxActive={firefoxActive}
          onChoose={this.onChoose}
          onClick={this.onClick}
        />
      </React.Fragment>
    );
  }
}

export default Home;
