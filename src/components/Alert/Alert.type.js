//@flow
import React from 'react';

export type AlertType = {
  type?: string,
  closeIcon?: boolean,
  title?: string,
  children?: React.Node,
  onClose?: SyntheticEvent<T>
};
