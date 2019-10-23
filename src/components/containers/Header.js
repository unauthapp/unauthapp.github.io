import React from 'react';
import styled from 'styled-components';

import { Logo, Icon } from '../core';

import { CONSTANTS, COLORS } from '../../constants';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 100px;
  padding-right: 100px;
  box-shadow: 0 1px 30px ${COLORS.PALETTE.SHADOW};
`

const StyledHref = styled.a`
  text-decoration: none;
`


export default class Header extends React.Component {

  render() {
    return (
      <Container>
        <Logo />
        <StyledHref href={CONSTANTS.URLS.YOUTUBE_TUTORIALS} target='_blank' rel='noopener noreferrer'>
          <Icon
            name='Youtube'
            color={COLORS.PALETTE.YOUTUBE}
            width='50px' height='50px'
          />
        </StyledHref>
      </Container>
    )
  }
}
