import React from 'react';
import { FaHome } from 'react-icons/fa';

import { Context } from '../../lib';
import { COLORS, CONSTANTS, ROUTES } from '../../constants';


export default class GoHome extends React.Component {

  handleGoHome() {
    const fn = Context.get(CONSTANTS.KEYS.ROUTER);
    if (fn) {
      fn(ROUTES.HOME)
    }
  }

  render() {
    return (
      <FaHome
        color={COLORS.PALETTE.PRIMARY}
        style={{
          margin: 'auto',
          filter: `drop-shadow(10px 5px 5px ${COLORS.PALETTE.SHADOW})`,
          cursor: 'pointer'
        }}
        onClick={this.handleGoHome}
      />
    );
  }
}

