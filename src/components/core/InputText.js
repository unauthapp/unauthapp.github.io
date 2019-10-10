import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const StyledInput = styled.input`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 14px 7px;
  color: ${COLORS.PALETTE.TEXT_BLACK};
  background-color: ${COLORS.PALETTE.WHITE};
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0px 50px ${COLORS.PALETTE.SHADOW};
`;

export default class InputText extends React.Component {

  render() {
    return (
      <StyledInput
        disabled={this.props.disabled}
        id={this.props.id}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

