import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { COLORS } from '../../constants';


class Success extends React.Component {

  render() {
    return (
      <FaTimes
        color={COLORS.PALETTE.FAIL}
        style={{
          width: '100px', height: '100px',
          filter: `drop-shadow(10px 5px 5px ${COLORS.PALETTE.SHADOW})`
        }}
      />
    )
  }
}


export default Success;