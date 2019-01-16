// @flow
import * as React from 'react';

import './Breadcrumb.scss';

import BreadcrumbItem from './components/BreadcrumbItem';
// import type {BreadcrumbType} from './Breadcrumb.type';

// type Props = BreadcrumbType;

const Breadcrumb = ({
  children,
  separator
}: {
  children?: any,
  separator?: string
}) => {
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
