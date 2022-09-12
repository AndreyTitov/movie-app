/**
 * @file Contains Loader component styles.
 */

import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: ${(props) => props.theme.colors.backgroundColor};
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .ant-spin {
    color: ${(props) => props.theme.colors.mainBrandColor};
  }
`;
