// @flow
import React from 'react';
import './index.scss';
import type {BadgeType} from './Badge.type';

type Props = BadgeType;

const Badge = ({type, hoverable, children}: Props) => {
  let classNames = 'compex-badge compex-badge-pill';

  if (hoverable) {
    classNames = `${classNames} compex-badge-hoverable`;
  }

  switch (type) {
    case 'primary':
      classNames = `${classNames} compex-badge-primary`;
      break;
    case 'success':
      classNames = `${classNames} compex-badge-success`;
      break;
    case 'warning':
      classNames = `${classNames} compex-badge-warning`;
      break;
    case 'danger':
      classNames = `${classNames} compex-badge-danger`;
      break;
    default:
      break;
  }
  return <div className={classNames}>{children}</div>;
};

export default Badge;
