/**
 * @file Contains Loader component.
 */

import React from 'react';
import { LoaderContainer, LoaderWrapper } from './SpinnerElement.style';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import 'antd/lib/spin/style/index.css';

const Loader = (props) => {
  const { spinning, size } = props;

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: size || 24,
      }}
      spin
    />
  );

  return (
    <LoaderContainer>
      <LoaderWrapper>
        <Spin spinning={spinning} indicator={antIcon} />
      </LoaderWrapper>
    </LoaderContainer>
  )
};

export default Loader;
