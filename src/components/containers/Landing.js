import React from 'react';
import styled from 'styled-components';

import { Text, Image } from '../core';
import { COLORS, MESSAGES, CONSTANTS } from '../../constants';
import { ChromeWebStore, FirefoxAddon } from '../../assets/images';


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
    padding: '10px 10px',
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
            <a href={CONSTANTS.URLS.CHROME_EXTENSION} target='_blank'>
              <Image width='100%' height='100px' src={ChromeWebStore} />
            </a>
          </StyledCard>
          <StyledCard id={CONSTANTS.KEYS.FIREFOX_ACTIVE} active={firefoxActive} onClick={this.props.onChoose}>
            <a href={CONSTANTS.URLS.FIREFOX_ADDON} target='_blank'>
              <Image width='100%' height='100px' src={FirefoxAddon} />
            </a>
          </StyledCard>
        </CardContainer>
      </Container>
    )
  }
}
