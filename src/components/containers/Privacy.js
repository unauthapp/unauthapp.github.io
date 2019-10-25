import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { Text } from '../core';

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

export default class Privacy extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Text fontSize='25px' fontWeight='bold' color={COLORS.PALETTE.PRIMARY}>PRIVACY POLICY</Text>
        </Header>
        <Body>
          <Text fontSize='15px' color={COLORS.PALETTE.BLACK}>
            <p>Your privacy is important to us. It is Unauth's policy to respect your privacy regarding any information we may collect from you across our website, http://unauthapp.com, and other sites we own and operate.</p>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
            <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
            <p>This policy is effective as of 22 October 2019.</p>
          </Text>
        </Body>
      </Container>
    )
  }
}
