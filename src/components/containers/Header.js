import React from 'react';
import styled from 'styled-components';

import { Logo } from '../core';

import { COLORS } from '../../constants';


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


export default class Header extends React.Component {

  render() {
    return (
      <Container>
        <Logo>unauth</Logo>
      </Container>
    )
  }
}
