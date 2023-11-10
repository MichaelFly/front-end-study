/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Auth = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M892.372 252.984c-154.789-40.221-246.723-85.059-296.588-115.591-52.629-32.225-70.643-55.658-71.617-56.959L511.902 62l-12.508 18.435c-0.897 1.202-18.848 24.668-71.574 56.964-49.842 30.53-141.745 75.366-296.53 115.586l-11.228 2.917-0.125 11.6c-0.116 10.735-2.17 264.211 56.245 376.504 25.499 49.02 58.673 96.163 98.602 140.125 31.856 35.074 68.064 68.217 107.617 98.506 35.196 26.954 66.6 46.623 86.745 58.378 11.488 6.705 20.637 11.614 26.289 14.554 10.322 5.368 12.152 6.318 15.737 6.409 0.288 0.016 0.568 0.023 0.843 0.023 3.867 0 6.51-1.517 10.247-3.66 1.744-1 4.614-2.663 8.385-4.899 6.554-3.889 17.106-10.275 30.173-18.629 22.987-14.697 58.307-38.42 96.015-67.969 42.508-33.307 79.332-67.084 109.449-100.39 38.116-42.153 65.639-83.792 81.802-123.763 47.049-116.347 55.304-364.064 55.634-374.553l0.378-12.108L892.372 252.984zM802.341 625.003c-25.072 62.001-83.746 130.525-169.68 198.163-54.74 43.086-104.2 73.08-121.323 83.092-15.463-7.957-57.162-30.756-106.273-68.628-55.682-42.941-132.862-114.9-184.343-213.867-45.435-87.342-49.501-282.485-49.798-330.612 223.204-59.446 311.996-129.217 340.852-157.893 28.853 28.648 117.619 98.353 340.493 157.774C850.113 341.592 839.427 533.292 802.341 625.003z"
        fill={getIconColor(color, 0, '#272636')}
      />
      <path
        d="M500.381 375.922m-59 0a59 59 0 1 0 118 0 59 59 0 1 0-118 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M500.381 375.922m-59 0a59 59 0 1 0 118 0 59 59 0 1 0-118 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M528.38 487.482c49.979-12.505 87-57.707 87-111.561 0-63.512-51.488-115-115-115s-115 51.488-115 115c0 53.854 37.021 99.056 87.001 111.561l0 281.773 40.929 0 15.07 0 68.184 0 0-56L528.38 713.255l0-49.079 68.184 0 0-56L528.38 608.176 528.38 487.482zM441.381 375.922c0-32.585 26.415-59 59-59s58.999 26.415 58.999 59-26.414 59.001-58.999 59.001S441.381 408.507 441.381 375.922z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

Auth.defaultProps = {
  size: 18,
};

export default Auth;
