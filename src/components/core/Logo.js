import React from 'react';
import styled from 'styled-components';

import { Context } from '../../lib';
import { COLORS, CONSTANTS, ROUTES } from '../../constants';


const StyledText = styled.div`
  color: ${COLORS.PALETTE.PRIMARY};
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
`;

export default class Logo extends React.Component {

  handleGoHome() {
    const fn = Context.get(CONSTANTS.KEYS.ROUTER);
    if (fn) {
      fn(ROUTES.HOME)
    }
  }

  render() {
    return (
      <StyledText onClick={this.handleGoHome}>{this.props.children}</StyledText>
    )
  }
}
