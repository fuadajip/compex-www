// @flow
import * as React from 'react';

export type CardType = {
  title?: string,
  size?: string,
  hoverable?: boolean,
  style?: StyleSheet,
  extra?: React.Node,
  cover?: string,
  children?: React.Node,
  footer?: React.Node
};
