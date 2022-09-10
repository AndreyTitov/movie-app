/**
 * @file
 * Contains popular movies styles.
 */
import styled from 'styled-components';

export const PopularMovieContainer = styled.div`
`;

export const PopularMovieWrapper = styled.div`
  height: 100vh;
  background: url(${(props) => props.background}) center center no-repeat;
  background-size: cover;
  position: relative;
  padding: 0 20px;
  box-shadow: 0px 0px 50px 42px ${(props) => props.theme.colors.backgroundColor} inset;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #ee7752, #e73c7e, #23a6d5, #23d5ab 100%);
    opacity: 0.4;
  }
`;

export const PopularMovieDescriptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  min-width: 700px;
  
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
  padding: 80px 0;
  position: relative;
  
  @media (min-width: 1300px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const MovieWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  &:hover {
    &:Before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      z-index: 1;
      opacity: 0.9;
      background: linear-gradient(-45deg, #90cea1, #0d253f, #01b4e4);
      background-size: 100% 100%;
    }
    
    a {
      display: block;
      opacity: 1;
    }
  }
  
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    z-index: 2;
    opacity: 0;
    display: none;
    transition: opacity .5s ease;
    text-decoration: none;
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
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
