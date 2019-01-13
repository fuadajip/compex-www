//@flow
import React from 'react';
import type {BreadcrumbItemType} from './BreadcrumItem.type';
import './BreadcrumbItem.scss';

type Props = BreadcrumbItemType;

const BreadcrumbItem = ({name, separator}: Props) => {
  return (
    <span>
      <span className="compex-breadcrumb-link">{name}</span>
      <span className="compex-breadcrumb-separator">
        {separator ? separator : '/'}
      </span>
    </span>
  );
};

export default BreadcrumbItem;
