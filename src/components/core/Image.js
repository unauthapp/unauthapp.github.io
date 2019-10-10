import React from 'react';
import styled from 'styled-components';


const StyledImage = styled.img`
  width: 80px;
  height: 30px;
  margin: 10px;
`; 

export default class Image extends React.Component {

  render() {
    return (
      <StyledImage src={this.props.children} />
    )
  }
}
