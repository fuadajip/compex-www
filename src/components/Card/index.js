// @flow
import React, {Fragment} from 'react';
import './index.scss';
import type {CardType} from './Card.type';

type Props = CardType;

const Card = ({
  title,
  extra,
  footer,
  children,
  size,
  cover,
  style,
  hoverable
}: Props) => {
  const cardSize =
    size == 'small' ? 'compex-card compex-card-small' : 'compex-card';

  const cardClassNames = hoverable
    ? `${cardSize} compex-card-hover`
    : `${cardSize}`;

  const renderExtra = extra ? (
    <div className="compex-card-head-action">{extra}</div>
  ) : null;

  const renderHead = title ? (
    <div className="compex-card-head">
      <div className="compex-card-head-wrapper">
        <div className="compex-card-head-title">{title}</div>
        {renderExtra}
      </div>
    </div>
  ) : null;

  const renderCover = cover ? (
    <div
      className="compex-card-cover"
      style={{backgroundImage: `url(${cover})`}}
    />
  ) : null;

  const renderBody = children ? (
    <div className="compex-card-body">{children}</div>
  ) : null;

  const renderFooter = footer ? (
    <div className="compex-card-footer">
      <div className="compex-card-footer-wrapper">{footer}</div>
    </div>
  ) : null;

  return (
    <div className={cardClassNames} style={style}>
      {renderHead}
      {renderCover}
      {renderBody}
      {renderFooter}
    </div>
  );
};

export default Card;
