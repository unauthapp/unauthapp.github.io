import React from 'react';
import styled from 'styled-components';
import { ChromeWebStore, FirefoxAddon } from '../../assets/images';
import { COLORS, CONSTANTS, MESSAGES } from '../../constants';
import { Image, Text } from '../core';

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
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    width: 100%;
  };
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 80px;
  text-align: center;
  padding: 10px 10px;
  margin: 20px 20px;
  color: ${props => props.active ? COLORS.PALETTE.PRIMARY : COLORS.PALETTE.PRIMARY_DARK};
  background-color: ${COLORS.PALETTE.WHITE};
  font-size: 45px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 1px 30px ${COLORS.PALETTE.SHADOW};
  cursor: pointer;
`;

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
            <a href={CONSTANTS.URLS.CHROME_EXTENSION} target='_blank' rel='noopener noreferrer'>
              <Image width='100%'  src={ChromeWebStore} />
            </a>
          </StyledCard>
          <StyledCard id={CONSTANTS.KEYS.FIREFOX_ACTIVE} active={firefoxActive} onClick={this.props.onChoose}>
            <a href={CONSTANTS.URLS.FIREFOX_ADDON} target='_blank' rel='noopener noreferrer'>
              <Image width='100%'  src={FirefoxAddon} />
            </a>
          </StyledCard>
        </CardContainer>
      </Container>
    )
  }
}
