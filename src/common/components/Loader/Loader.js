/**
 * @file
 * Contains Loader component.
 */
import React from 'react';
import { LoaderWrapper, LoaderContainer } from './Loader.style';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <div></div>
        <div></div>
        <div></div>
      </LoaderWrapper>
    </LoaderContainer>
  )
};

export default Loader;
