/**
 * @file
 * Contains Tooltip styles.
 */
import React from 'react';
import styled from 'styled-components';
import { Tooltip as AntdTooltip } from 'antd';
import 'antd/lib/tooltip/style/index.css';

export const Tooltip = styled(({ ...rest }) => <AntdTooltip {...rest} />)`

`;
