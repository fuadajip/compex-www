//@flow
import React from 'react';
import {BreadcrumbType} from './Breadcrumb.type';
import './Breadcrumb.scss';

import BreadcrumbItem from './components/BreadcrumbItem';

type Props = BreadcrumbType;

const Breadcrumb = ({children, separator}): Props => {
  return (
    <div className="compex-breadcrumb">
      {children
        ? children.map(({props}, idx) => (
            <BreadcrumbItem
              separator={separator}
              key={idx}
              name={props.children}
            />
          ))
        : null}
    </div>
  );
};

export default Breadcrumb;
