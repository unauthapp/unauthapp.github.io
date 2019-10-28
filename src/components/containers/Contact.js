import React from 'react';
import styled from 'styled-components';
import { COLORS, CONSTANTS } from '../../constants';
import { Text, Icon } from '../core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Header = styled.div`
  margin-top: 5px;
`;

const Body = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  @media only screen and (max-width: 900px) {
    margin: 0 30px;
  };
`;

const ButtonContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const StyledIcon = styled(Icon)`
  margin: 30px;
`;

const StyledHref = styled.a`
  text-decoration: none;
`

export default class Contact extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Text fontSize='30px' fontWeight='bold' color={COLORS.PALETTE.PRIMARY}>CONTACT US</Text>
        </Header>
        <Body>
          <ButtonContainer>
            <StyledHref href={CONSTANTS.URLS.FACEBOOK} target='_blank' rel='noopener noreferrer'>
              <StyledIcon
                name='Facebook'
                color={COLORS.PALETTE.FACEBOOK}
                width='60px' height='60px'
              />
            </StyledHref>
            <StyledHref href={CONSTANTS.URLS.TWITTER} target='_blank' rel='noopener noreferrer'>
              <StyledIcon
                name='Twitter'
                color={COLORS.PALETTE.TWITTER}
                width='60px' height='60px'
              />
            </StyledHref>
            <StyledHref href={CONSTANTS.URLS.GITHUB} target='_blank' rel='noopener noreferrer'>
              <StyledIcon
                name='Github'
                color={COLORS.PALETTE.GITHUB}
                width='60px' height='60px'
              />
            </StyledHref>
            <StyledHref href={CONSTANTS.URLS.MAIL} target='_blank' rel='noopener noreferrer'>
              <StyledIcon
                name='Mail'
                color={COLORS.PALETTE.TEXT_BLACK}
                width='60px' height='60px'
              />
            </StyledHref>
          </ButtonContainer>
        </Body>
      </Container>
    )
  }
}
