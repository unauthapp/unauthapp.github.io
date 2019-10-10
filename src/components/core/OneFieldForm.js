import React from 'react';
import styled from 'styled-components';

import ButtonIcon from '../core/ButtonIcon';
import InputText from '../core/InputText';

import { MESSAGES } from '../../constants';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: auto;
  width: 100%;
`;

export default class OneFieldForm extends React.Component {  

  render() {
    return (
      <Container>
        <InputText id={this.props.fieldId} placeholder={this.props.placeholder} onChange={this.props.onChange} />
        <ButtonIcon width='80px' onClick={this.props.onClick}>{MESSAGES.BUTTON.NEXT}</ButtonIcon>
      </Container>
    )
  }
}