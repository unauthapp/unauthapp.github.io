import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Image } from '.';
import UnauthLogo from '../../logo.svg';


export default class Logo extends React.Component {

  render() {
    return (
      <Link to={ROUTES.HOME}>
        <Image width='150px' height='80px' margin='-10px' src={UnauthLogo} />
      </Link>
    )
  }
}
