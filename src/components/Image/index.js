// @flow
import React from 'react';
import './index.scss';
import type {ImageType} from './Image.type';

type Props = ImageType;

const Image = ({src, alt, type, size}: Props) => {
  let classNames = 'compex-image';
  switch (type) {
    case 'circle':
      classNames = `${classNames} compex-image-circle`;
      break;
    case 'square':
      classNames = `${classNames} compex-image-square`;
      break;
    default:
      break;
  }

  const customSize = size ? {width: size[0], height: size[1]} : null;

  return (
    <div className={classNames} style={customSize}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
