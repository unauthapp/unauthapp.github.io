import React from 'react';
import styled from 'styled-components';

import { Text, Link } from '../core';

import { MESSAGES, COLORS, ROUTES } from '../../constants';



const Box = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 10px;
  background-color: ${COLORS.PALETTE.LIGHT_GRAY};
  box-shadow: 0 30px 30px ${COLORS.PALETTE.SHADOW};
`

const TextContainer = styled.div`
  margin: 15px;
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
      </Box>
    )
  }
}
