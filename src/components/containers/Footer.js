import React from 'react';
import "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome";
import styled from 'styled-components';
import { COLORS, MESSAGES, ROUTES } from '../../constants';
import { Link, Text } from '../core';

const Box = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 10px;
  background-color: ${COLORS.PALETTE.LIGHT_GRAY};
  box-shadow: 0 30px 30px ${COLORS.PALETTE.SHADOW};
  @media only screen and (max-width: 900px) {
    padding: 10px;
  };
`

const TextContainer = styled.div`
  margin: 15px;
  color: red;
`;



export default class Footer extends React.Component {

  render() {
    return (
      <Box>
        <TextContainer>
          <Text fontSize='20px' letterSpacing='2px' color={COLORS.PALETTE.BLACK}>
            {MESSAGES.PLACEHOLDER.COPYRIGHT}
          </Text>
        </TextContainer>
        <TextContainer>
          <Text fontSize='15px' color={COLORS.PALETTE.BLACK}>
            <a href={ROUTES.PRIVACY}>{MESSAGES.TITLE.PRIVACY}</a>
          </Text>
        </TextContainer>
        <TextContainer>
          <a href={ROUTES.FACEBOOK} target="_blank" rel="noopener noreferrer" class="social">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href={ROUTES.TWITTER} target="_blank" rel="noopener noreferrer" class="social">
              <i class="fab fa-twitter-square"></i>
            </a>
          <a href={ROUTES.MAIL} target="_blank" rel="noopener noreferrer" class="social">
          <i class="fas fa-at"></i>
          </a>
        </TextContainer>
      </Box>
      
    )
  }
}
