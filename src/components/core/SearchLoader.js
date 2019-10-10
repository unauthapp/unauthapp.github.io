import React, { Component } from 'react';
import Loader from 'react-spinners/BounceLoader';

import { COLORS } from '../../constants';


export default class SearchLoader extends Component {
  render() {
    return (
      <div>
        <Loader sizeUnit={'px'} size={150} color={COLORS.PALETTE.PRIMARY} loading={true} />
      </div>
    )
  }
}
