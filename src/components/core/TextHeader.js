import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';


const StyledText = styled.div`
  color: ${COLORS.PALETTE.TEXT_PRIMARY};
  font-size: 40px;
`;

export default class TextHeader extends React.Component {
  render() {
    return (
      <StyledText>{this.props.children}</StyledText>
    )
  }
}
