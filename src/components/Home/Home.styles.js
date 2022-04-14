/**
 * @file
 * Contains home page styles.
 */
import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeHeroSection = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  padding: 100px 20px;
  color: white;
  background: url(${(props) => props.background}) center center no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 50px 42px rgba(0, 0, 0, 0.6) inset;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 2;
  }
`;

export const HomeHeroDescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
`;

export const HomeHeroTitle = styled.h3`
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 46px;
`;

export const HomeHeroSubTitle = styled.div`
  color: ${(props) => props.theme.colors.mainBrandColor};
  font-size: 24px;
  
  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
