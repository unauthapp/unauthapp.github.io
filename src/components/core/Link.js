import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import COLORS from '../../constants/colors';


const StyledText = styled.div`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  cursor: pointer;
`;

const theme = {
  color: COLORS.PALETTE.TEXT_BLACK,
  fontSize: '25px',
  fontWeight: 'normal',
  letterSpacing: '0px'
};


export default class NavigateLink extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Link to={this.props.to}>
          <StyledText theme={{ ...this.props }}>{this.props.children}</StyledText>
        </Link>
      </ThemeProvider>
    )
  }
}
