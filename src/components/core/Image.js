import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
`;

const theme = {
  width: '50px',
  hegiht: '50px',
  magin: '10px'
};

export default class Image extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme, {...this.props}}>
        <StyledImage src={this.props.src} href={this.props.href} />
      </ThemeProvider>
    )
  }
}
