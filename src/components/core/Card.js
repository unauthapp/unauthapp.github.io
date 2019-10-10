import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const StyledBox = styled.div`
  display: block;
  height: 100vh;
  padding: auto;
  margin: 40px 40px;
  color: ${COLORS.PALETTE.PRIMARY_DARK};
  background-color: ${COLORS.PALETTE.WHITE};
  text-align: center;
  font-size: 45px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 30px ${COLORS.PALETTE.SHADOW};
`;

export default class Card extends React.Component {

  render() {
    return (
      <StyledBox>{this.props.children}</StyledBox>
    );
  }
}

