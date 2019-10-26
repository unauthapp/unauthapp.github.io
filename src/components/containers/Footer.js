import React from 'react';
import "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome";
import styled from 'styled-components';
import { COLORS, MESSAGES, ROUTES, CONSTANTS } from '../../constants';
import { Text } from '../core';

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 10px;
  background-color: ${COLORS.PALETTE.LIGHT_GRAY};
  box-shadow: 0 30px 30px ${COLORS.PALETTE.SHADOW};
  @media only screen and (max-width: 900px) {
    padding: 10px;
  };
`

const Container = styled.div`
  margin: 12px;
  font-size: 30px;
`;


const fontAwesomeStyle = {
  fontSize: '25px'
};



export default class Footer extends React.Component {

  render() {
    return (
      <Box>
        <Container>
          <Text fontSize='20px' letterSpacing='2px' color={COLORS.PALETTE.BLACK}>
            {MESSAGES.PLACEHOLDER.COPYRIGHT}
          </Text>
        </Container>
        <Container>
          <Text fontSize='15px' color={COLORS.PALETTE.BLACK}>
            <a href={ROUTES.PRIVACY}>{MESSAGES.TITLE.PRIVACY}</a>
          </Text>
        </Container>
        <Container>
          <a href={CONSTANTS.URLS.FACEBOOK} target="_blank" rel="noopener noreferrer">
            <i style={fontAwesomeStyle} class="fab fa-facebook-square" />
          </a>
          <a href={CONSTANTS.URLS.TWITTER} target="_blank" rel="noopener noreferrer">
            <i style={fontAwesomeStyle} class="fab fa-twitter-square" />
          </a>
          <a href={CONSTANTS.URLS.MAIL} target="_blank" rel="noopener noreferrer">
            <i style={fontAwesomeStyle} class="fas fa-at" />
          </a>
        </Container>
      </Box>

    )
  }
}
