/**
 * @file
 * Contains movie styles.
 */
import styled from 'styled-components';
import { FaImdb } from 'react-icons/fa';
import { IoBrowsers } from 'react-icons/io5';

export const MovieContainer = styled.div`
  background: ${(props) => props.theme.colors.mainBrandColor};
`;

export const MovieWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 9;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {
    
  }

  @media (min-width: 1200px) {
    
  }
`;

export const MovieTopWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 100px 20px 0 20px;
  background: url(${(props) => props.background}) center center no-repeat;
  background-size: cover;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: linear-gradient(-45deg, ${(props) => props.theme.colors.mainBrandColor}, ${(props) => props.theme.colors.backgroundColor}, ${(props) => props.theme.colors.mainBrandSecondaryColor});
  }
  
  @media (min-width: 992px) {
    height: 100vh;
    padding: 0;
  }
`;

export const MovieTopRightColumn = styled.div`
  width: 100%;
  position: relative;
  z-index: 9;
  display: none;

  @media (min-width: 992px) {
    width: 30%;
    display: block;
  }
`;

export const MovieTopLeftColumn = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  z-index: 9;
  text-align: center;

  @media (min-width: 992px) {
    width: 70%;
    text-align: left;
  }
`;

export const MoviePosterWrapper = styled.div`
  border-radius: 40px;
  overflow: hidden;
  width: 100%;
  margin: 0 0 0 auto;

  img {
    width: 100%;
  }
`;

export const MovieAverageRateWrapper = styled.div`
  color: ${(props) => props.theme.colors.mainBrandColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  text-align: center;
  padding: 20px 0;
`;

export const MovieAverageRate = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.mainBrandColor};
`;

export const MovieContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 920px;
  }

  @media (min-width: 1400px) {
    width: 1200px;
  }

  @media (min-width: 1900px) {
    width: 100%;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 48px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.mainBrandColor};
`;

export const MovieTagline = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-style: italic;
  color: ${(props) => props.theme.colors.white};
`;

export const MovieDescription = styled.p`
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.mainBrandColor};
  
  @Media (min-width: 992px) {
    width: 80%;
  }
`;

export const MovieGenresWrapper = styled.div`
  margin-bottom: 20px;
`;

export const MoviesLinksContainer = styled.div`

`;

export const MoviesLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
    display: block;
    width: 30px;

    &:first-child {
      margin-left: 0;
    }
    
    &:hover {
      svg {
        color: ${(props) => props.theme.colors.mainBrandSecondaryColor};
      }
    }
  }
  
  @media (min-width: 992px) {
    justify-content: start;
  }
`;

export const MoviesLinksTitle = styled.div`
  font-size: 18px !important;
  margin-bottom: 4px !important;
`;

export const ImdbIcon = styled(FaImdb)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainBrandColor};
`;

export const BrowserIcon = styled(IoBrowsers)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainBrandColor};
`;

export const MovieGenresTitle = styled.h3`
  font-size: 18px !important;
  margin-bottom: 4px !important;
`;

export const MovieGenreWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.backgroundColor};
  width: 100%;
  flex-direction: row;
  justify-content: center;
  
  @media (min-width: 992px) {
    justify-content: start;
  }
`;

export const MovieGenre = styled.div`
  position: relative;
  margin-right: 20px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.mainBrandColor};

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
  max-width: 800px;
  min-height: 600px;
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
  padding: 80px 0;
`;

export const MovieTrailerTitle = styled.h3`
  color: ${(props) => props.theme.colors.backgroundColor};
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
`;

export const CreditsContainer = styled.div`
  z-index: 9;
  position: relative;
  padding: 120px 20px;
  background: ${(props) => props.theme.colors.backgroundColor};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    width: 100%;
    background: ${(props) => props.theme.colors.backgroundColor};
    transform: skewY(190deg);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 100%;
    background: ${(props) => props.theme.colors.backgroundColor};
    transform: skewY(190deg);
  }
`;

export const CreditsTitle = styled.h3`
  color: ${(props) => props.theme.colors.mainBrandColor};
  text-align: center;
  position: relative;
  font-size: 40px;
  margin-bottom: 80px;
`;

export const CreditsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${(props) => props.theme.colors.backgroundColor});
    z-index: 99;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(-90deg, transparent, ${(props) => props.theme.colors.backgroundColor});
    z-index: 99;
  }
`;

export const CastActorCardWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 999;
`;

export const CastActorCardImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

export const CastActorInfo = styled.div`
  background: ${(props) => props.theme.colors.mainBrandColor};
  color: ${(props) => props.theme.colors.backgroundColor};
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  
  p {
    &:first-child {
      margin-bottom: 10px;
      font-weight: 900;
      font-size: 20px;
    }
    
    &:nth-child(2n) {
      font-size: 14px;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
