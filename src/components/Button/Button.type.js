//@flow
import React from 'react';

export type ButtonType = {
  type?: string,
  size?: string,
  block?: boolean,
  disabled?: boolean,
  icon?: React.Node,
  iconPosition?: string,
  children?: React.Node,
  oncClick?: SyntheticEvent<T>
};
