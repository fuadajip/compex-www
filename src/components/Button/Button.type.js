// @flow
import * as React from 'react';

export type ButtonType = {
  type?: string,
  size?: string,
  block?: boolean,
  disabled?: boolean,
  icon?: React.Node,
  iconPosition?: string,
  children?: React.Node,
  onClick?: Function
};
