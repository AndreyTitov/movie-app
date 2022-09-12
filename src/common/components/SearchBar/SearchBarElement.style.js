/**
 * @file
 * Contain search bar element.
 */
import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';

export const SearchBarInputWrapper = styled.div`
  width: 200px;
  position: relative;
  box-sizing: border-box;
  min-height: 40px;
`;

export const SearchBarInput = styled.input`
  width: ${(props) => props.showSearchBar ? '100%' : '40px'};
  padding: ${(props) => props.showSearchBar ? '10px 40px 10px 10px' : '10px'};
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainBrandColor};
  color: ${(props) => props.showSearchBar ? props.theme.colors.mainBrandColor : 'transparent'};
  background: ${(props) => props.theme.colors.backgroundColor};
  transition: all .5s ease;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: ${(props) => props.showSearchBar ? props.theme.colors.backgroundColor : props.theme.colors.mainBrandColor};
  
  &::placeholder {
    color: ${(props) => props.showSearchBar ? props.theme.colors.mainBrandColor : 'transparent'};
  }
`;

export const FindedMoviesContainer = styled.div`
  width: 100%;
`;

export const FindedMoviesListWrapper = styled.div`
  position: absolute;
  top: 60px;
  background: white;
  max-height: 200px;
  overflow: scroll;
  transition: all .5s ease;
  border-radius: 10px;
`;

export const FindedMovie = styled.div`
  color: ${(props) => props.theme.colors.mainBrandColor};
  background: ${(props) => props.theme.colors.backgroundColor} !important;
  transition: all .5s ease;
  cursor: pointer;
  position: relative;
  background: white;
  
  a {
    color: ${(props) => props.theme.colors.mainBrandColor};
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    width: 100%;

    &:hover {
      background: ${(props) => props.theme.colors.mainBrandColor};
    }
  }

  &:hover {
    background: ${(props) => props.theme.colors.mainBrandColor};
    color: ${(props) => props.theme.colors.white};
    
    a {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const SearchBarIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  cursor: pointer;
`;

export const SearchIcon = styled(RiSearch2Line)`
  font-size: 16px;
  color: ${(props) => props.showSearchBar ? props.theme.colors.mainBrandColor : props.theme.colors.backgroundColor};
  transform: translate(0, -50%);
  transition: all .5s ease;
`;
