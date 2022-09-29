/**
 * @file
 * Contains movie styles.
 */
import styled from 'styled-components';

export const MovieContainer = styled.div`
  height: 100%;
  position: relative;
  z-index: 9;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {
    width: 760px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const MovieTopWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 0 0;
  
  @media (min-width: 576px) {

  }
  
  @media (min-width: 768px) {

  }
  
  @media (min-width: 992px) {
    flex-direction: row;
    width: 760px;
  }
  
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const MovieTopRightColumn = styled.div`
  width: 100%;  
  position: relative;
  z-index: 9;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const MovieTopLeftColumn = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  z-index: 9;
  
  @media (min-width: 992px) {
    width: 50%;
  }
  
  h3 {
    font-size: 48px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.white} !important;
  }
  
  p {
    font-size: 20px;
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const MoviePosterWrapper = styled.div`
  border-radius: 40px;
  overflow: hidden;
  width: 60%;
  margin: 0 auto;
  
  img {
    width: 100%;
  }
`;

export const MovieAverageRateWrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const MovieAverageRate = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.mainBrandColor};
`;

export const MovieGenresWrapper = styled.div`
  margin-bottom: 20px;
`;

export const MoviesLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  
  a {
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
    display: block;
    width: 20px;
    
    &:first-child {
      margin-left: 0;
    }
    
    svg {
      fill: ${(props) => props.theme.colors.mainBrandColor};
    }
  }
`;

export const MovieGenresTitle = styled.h3`
  font-size: 20px !important;
  margin-bottom: 4px !important;
`;

export const MovieGenreWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieGenre = styled.div`
  position: relative;
  margin-right: 20px;
  text-transform: uppercase;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: calc(-20px / 2);
    width: 1px;
    height: 40%;
    transform: translateY(-50%);
    background: ${(props) => props.theme.colors.white};
  }
  
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

export const MovieTrailer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 800px;
  position: relative;
  z-index: 9;
  
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const MovieTrailerWrapper = styled.div`
  position: relative;
  z-index: 9;
`;

export const MovieTrailerTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;
`;

export const CreditsContainer = styled.div`
  z-index: 9;
  position: relative;
`;

export const CreditsTitle = styled.h3`

`;

export const CreditsWrapper = styled.div`

`;

export const CastActorCardWrapper = styled.div`
  margin: 0 auto;
`;

export const CastActorCardImageWrapper = styled.div`
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
`;
