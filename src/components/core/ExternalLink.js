import React from 'react';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';


const StyledAnchor = styled.a`
  text-decoration: none;
`;

export default class ExternalLink extends React.Component {

  render() {
    return (
      <StyledAnchor href={this.props.url} target='_blank'>
        <ButtonIcon>{this.props.children}</ButtonIcon>
      </StyledAnchor>
    );
  }
}

