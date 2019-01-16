// @flow
import * as React from 'react';

export type AlertType = {
  type?: string,
  closeIcon?: boolean,
  title?: string,
  children?: React.Node,
  onClose?: Function
};
