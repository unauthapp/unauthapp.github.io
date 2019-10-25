import React from 'react';
import { faHome } from "@fortawesome/fontawesome-free-brands";
import { faHome2 } from "@fortawesome/fontawesome-free-solid";
import  FontAwesomeIcon from "@fortawesome/fontawesome";
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
          <Link to={ROUTES.PRIVACY} fontSize='15px' color={COLORS.PALETTE.BLACK}>
            {MESSAGES.TITLE.PRIVACY}
          </Link>
        </TextContainer>
        <TextContainer>
          <a href="https://www.facebook.com/unauthapp" target="_blank" class="social">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/unauthapp" target="_blank" class="social">
              <i class="fab fa-twitter-square"></i>
            </a>
          <a href="mailto:unauth.cloud@gmail.com" target="_blank" class="social">
          <i class="fas fa-at"></i>
          </a>
        </TextContainer>
      </Box>
      
    )
  }
}
