import React from 'react';
import styled from 'styled-components';

import { PromptManager } from '../../lib';

import COLORS from '../../constants/colors';
import { CONSTANTS, MESSAGES } from '../../constants';
import { ButtonPrimary, Text } from '.';


const ParentContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`;

const StyledDiv = styled.div`
  position: absolute;
  z-index: 100;
  width: 600px;
  height: 300px;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -200px;
  text-align: center;
  background-color: ${COLORS.PALETTE.WHITE};
  border-radius: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  pointer: cursor;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  text-align: center;
  background-color: ${COLORS.PALETTE.LIGHT_GRAY};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 10px;
`;

export default class PromptConfirm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
      text: ''
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    PromptManager.set(CONSTANTS.FUNCTION.POPUP_SHOW, this.show);
    PromptManager.set(CONSTANTS.FUNCTION.POPUP_HIDE, this.hide);
  }


  show(text, onOk, onCancel) {
    this.setState({
      isVisible: true,
      text,
      onOk,
      onCancel
    });
  }

  hide() {

    this.setState({
      isVisible: false,
      text: ''
    });
  }


  handleOk(event) {

    this.hide();

    const { onOk } = this.state;
    if (onOk) {
      onOk(event);
    }
  }

  handleCancel(event) {

    this.hide();

    const { onCancel } = this.state;
    if (onCancel) {
      onCancel(event);
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isVisible &&
          <ParentContainer>
            <StyledDiv>
              <Header>
                <Text fontSize='25px' fontWeight='bold' color={COLORS.PALETTE.TEXT_BLACK}>
                  {MESSAGES.TITLE.CONFIRM}
                </Text>
              </Header>
              <Container>
                <Text fontSize='20px' fontWeight='normal' color={COLORS.PALETTE.TEXT_BLACK}>
                  {this.state.text}
                </Text>
                <ButtonContainer>
                  <ButtonPrimary onClick={this.handleOk}>{MESSAGES.BUTTON.OK}</ButtonPrimary>
                  <ButtonPrimary onClick={this.handleCancel}>{MESSAGES.BUTTON.CANCEL}</ButtonPrimary>
                </ButtonContainer>
              </Container>
            </StyledDiv>
          </ParentContainer>
        }
      </React.Fragment>
    )
  }
}
