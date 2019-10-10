import React from 'react';
import styled from 'styled-components';

import { Text, ButtonIcon, Icon } from '../core';
import { COLORS, MESSAGES, CONSTANTS } from '../../constants';
import ChromeLogo from '../core/ChromeLogo';
import chrome from '../core/chrome.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


const StyledCard = styled.div(props => {

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '340px',
    height: '80px',
    textAlign: 'center',
    padding: '0px 0px',
    margin: '20px 20px',
    color: props.active ? COLORS.PALETTE.PRIMARY : COLORS.PALETTE.PRIMARY_DARK,
    backgroundColor: COLORS.PALETTE.WHITE,
    fontSize: '45px',
    border: 'none',
    borderRadius: '15px',
    boxShadow: `0 1px 30px ${COLORS.PALETTE.SHADOW}`,
    cursor: 'pointer',
  }
});

const ELementContainer = styled.div`
  margin: 10px;
`;


export default class Landing extends React.Component {

  render() {
    const { chromeActive, firefoxActive } = this.props;
    return (
      <Container>
        <ELementContainer>
          <Text fontSize='40px' color={COLORS.PALETTE.TEXT_BLACK}>
            {MESSAGES.PLACEHOLDER.LANDING_HEADER}
          </Text>
        </ELementContainer>
        <ELementContainer>
          <Text fontSize='20px' color={COLORS.PALETTE.TEXT_SECONDARY}>
            {MESSAGES.PLACEHOLDER.LANDING_TAGLINE}
          </Text>
        </ELementContainer>
        <CardContainer>
          <StyledCard id={CONSTANTS.KEYS.CHROME_ACTIVE} active={chromeActive} onClick={this.props.onChoose}>
            {/* <Icon
              name='Chrome'
              width='150px' height='150px'
              style={{ margin: '25px' }}
            /> */}
            <ELementContainer>
              <img width='100%' height='100px' src={'https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png'} />
            </ELementContainer>
            <Text
              fontSize='25px' fontWeight='bold'
              color={chromeActive ? COLORS.PALETTE.PRIMARY : COLORS.PALETTE.PRIMARY_VERY_LIGHT}
            >
              {MESSAGES.BUTTON.SEND_SESSION}
            </Text>
          </StyledCard>
          <StyledCard id={CONSTANTS.KEYS.FIREFOX_ACTIVE} active={firefoxActive} onClick={this.props.onChoose}>
            <Icon
              name='Sensor'
              width='150px' height='150px'
              color={firefoxActive ? COLORS.PALETTE.PRIMARY : COLORS.PALETTE.PRIMARY_VERY_LIGHT}
              style={{ margin: '25px' }}
            />
            <Text
              fontSize='25px' fontWeight='bold'
              color={firefoxActive ? COLORS.PALETTE.PRIMARY : COLORS.PALETTE.PRIMARY_VERY_LIGHT}
            >
              {MESSAGES.BUTTON.RECEIVE_SESSION}
            </Text>
          </StyledCard>
        </CardContainer>
        <ELementContainer>
          <ButtonIcon onClick={this.props.onClick}>{MESSAGES.BUTTON.GET_STARTED}</ButtonIcon>
        </ELementContainer>
      </Container>
    )
  }
}
