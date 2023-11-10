/* eslint-disable */

import React from 'react';
import LoginData from './LoginData';
import Auth from './Auth';
import Zhiwenshibiezhiwen from './Zhiwenshibiezhiwen';
import FaceidLine from './FaceidLine';
export { default as LoginData } from './LoginData';
export { default as Auth } from './Auth';
export { default as Zhiwenshibiezhiwen } from './Zhiwenshibiezhiwen';
export { default as FaceidLine } from './FaceidLine';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'login_data':
      return <LoginData {...rest} />;
    case 'auth':
      return <Auth {...rest} />;
    case 'zhiwenshibiezhiwen':
      return <Zhiwenshibiezhiwen {...rest} />;
    case 'faceid_line':
      return <FaceidLine {...rest} />;

  }

  return null;
};

export default IconFont;
