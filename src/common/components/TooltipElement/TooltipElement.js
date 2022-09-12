/**
 * @file
 * Contains Tooltip Component.
 */
import React from 'react';
import { Tooltip } from './TooltipElement.style';

const TooltipElement = (props) => {
  const { ...rest } = props;

  return <Tooltip {...rest} />;
};

export default TooltipElement;
