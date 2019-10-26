import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Image } from '.';
import UnauthLogo from '../../logo.png';


export default class Logo extends React.Component {

  render() {
    return (
      <Link to={ROUTES.HOME}>
        <Image width='210px' height='50px' margin='-10px' src={UnauthLogo} />
      </Link>
    )
  }
}
