/**
 * @file
 * Contains popular movies styles.
 */
import styled from 'styled-components';

export const PopularMovieContainer = styled.div`
  min-height: 100vh;
`;

export const PopularMovieWrapper = styled.div`
  height: 100vh;
  background: url(${(props) => props.background}) center center no-repeat;
  background-size: cover;
  position: relative;
  padding: 0 20px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, ${(props) => props.theme.colors.mainBrandColor}, ${(props) => props.theme.colors.backgroundColor}, ${(props) => props.theme.colors.mainBrandSecondaryColor} 100%);
    opacity: 0.4;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, ${(props) => props.theme.colors.backgroundColor});
  }
`;

export const PopularMovieDescriptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 100%;
  
  @media (min-width: 992px) {
    min-width: 700px;
  }
  
  h3 {
    font-size: 64px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.mainBrandColor};
  }
  
  p {
    font-size: 20px;
  }
`;

export const MoviesRow = styled.div`
  
`;

export const MoviesCol = styled.div`
  padding: 10px;
`;

export const PopularMoviesContainer = styled.div`
  padding: 80px 20px;
  position: relative;
  
  @media (min-width: 1400px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
  }
`;

export const MovieWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transform: scale(calc(1 - 0.05));
  transition: all .5s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    transition: all .5s ease;
  }
  
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    z-index: 999;
    opacity: 0;
    display: none;
    transition: opacity .5s ease;
    text-decoration: none;
  }
  
  &:hover {
    transform: scale(1);
    
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      z-index: 1;
      opacity: 1;
      //background: linear-gradient(-45deg, ${(props) => props.theme.colors.mainBrandColor}, ${(props) => props.theme.colors.backgroundColor}, ${(props) => props.theme.colors.mainBrandSecondaryColor});
      background-size: 100% 100%;
    }
    
    a {
      display: block;
      opacity: 1;
      color: ${(props) => props.theme.colors.white};
      transition: all .5s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      
      &:hover {
        color: ${(props) => props.theme.colors.mainBrandColor};
      }
    }
  }
  
  &:hover {
    &:before {
      //content: '';
      //position: absolute;
      //top: 0;
      //left: 0;
      //width: 100%;
      //height: 100%;
      //background: rgba(0,0,0,0.8);
    }
    
    div:first-child {
      top: 50%;
    }
    
    div:last-child {
      bottom: -100% !important;
    }
  }
  
  img {
    width: 100%;
    height: 100% !important;
  }
`;

export const MovieRate = styled.p`
  
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  text-align: left;
  background: linear-gradient(-45deg, ${(props) => props.theme.colors.mainBrandColor}, ${(props) => props.theme.colors.mainBrandSecondaryColor});
  transition: all .5s ease;
  
  p {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const MovieMoreInfo = styled.div`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  z-index: 999;
`;

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.mainBrandColor};
  color: ${(props) => props.theme.colors.greyTwo};
  min-width: 200px;
  margin: 40px auto;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
  display: block;
  cursor: pointer;
`;

export const PopularMoviesTitleWrapper = styled.div`
  h3 {
    font-size: 36px;
    padding: 20px 0;
    text-align: center;
    color: ${(props) => props.theme.colors.mainBrandColor};
  }
`;

export const PopularMoviesWrapper = styled.div`
  display: grid;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
