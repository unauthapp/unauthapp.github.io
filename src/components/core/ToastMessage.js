import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Text from './Text';
import { ToastManager } from '../../lib';

import COLORS from '../../constants/colors';
import { CONSTANTS } from '../../constants';

const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';


const StyledDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${props => props.theme.color};
  border-radius: 3px;
  box-shadow: 0 3px 60px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const theme = {
  color: COLORS.PALETTE.SUCCESS
};

export default class ToastMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
      text: '',
      type: ''
    }

    this.success = this.success.bind(this);
    this.fail = this.fail.bind(this);
    this.hideToast = this.hideToast.bind(this);

    ToastManager.set(CONSTANTS.FUNCTION.TOAST_SUCCESS, this.success);
    ToastManager.set(CONSTANTS.FUNCTION.TOAST_FAIL, this.fail);
  }


  success(text) {

    // Return if there is no message to show
    if (!text || text.length === 0) {

      return false;
    }

    this.setState({
      isVisible: true,
      text: text,
      type: SUCCESS
    });

    this.startTimer();
  }


  fail(text) {

    // Return if there is no message to show
    if (!text || text.length === 0) {

      return false;
    }

    this.setState({
      isVisible: true,
      text: text,
      type: FAIL
    });

    this.startTimer();
  }


  startTimer() {

    setTimeout(() => {
      this.hideToast()
    }, 3000);
  }


  hideToast() {

    this.setState({
      isVisible: false
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isVisible &&
          <ThemeProvider theme={theme}>
            <StyledDiv theme={{ color: COLORS.PALETTE[this.state.type] }}>
              <Text fontSize='16px' color={COLORS.PALETTE.WHITE}>{this.state.text}</Text>
            </StyledDiv>
          </ThemeProvider>
        }
      </React.Fragment>
    )
  }
}
