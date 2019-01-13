//@flow
import React, {Fragment} from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';

import type {AlertType} from './Alert.type';

type Props = AlertType;

const Alert = ({type, title, closeIcon, onClose, children}: Props) => {
  let classNames;
  switch (type) {
    case 'primary':
      classNames = 'compex-alert compex-alert-primary';
      break;
    case 'success':
      classNames = 'compex-alert compex-alert-success';
      break;
    case 'warning':
      classNames = 'compex-alert compex-alert-warning';
      break;
    case 'danger':
      classNames = 'compex-alert compex-alert-danger';
      break;
    default:
      classNames = 'compex-alert';
      break;
  }

  return (
    <div className={classNames}>
      <span>
        <div className="compex-alert-title">{title}</div>
        <div className="compex-alert-body">{children}</div>
      </span>
      {closeIcon ? (
        <span>
          <div className="compex-close-icon" onClick={onClose}>
            X
          </div>
        </span>
      ) : null}
    </div>
  );
};

export default Alert;
