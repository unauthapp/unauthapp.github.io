import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { COLORS } from '../../constants';


class Success extends React.Component {

  render() {
    return (
      <FaCheck
        color={COLORS.PALETTE.SUCCESS}
        style={{
          width: '100px', height: '100px',
          filter: `drop-shadow(10px 5px 5px ${COLORS.PALETTE.SHADOW})`
        }}
      />
    )
  }
}


export default Success;