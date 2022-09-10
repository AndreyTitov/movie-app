/**
 * @file
 * Contain search bar element.
 */
import styled from 'styled-components';

export const SearchBarInputWrapper = styled.div`
  width: 200px;
  position: relative;
  box-sizing: border-box;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainBrandColor};
  color: ${(props) => props.theme.colors.mainBrandColor};
  
  &::placeholder {
    color: ${(props) => props.theme.colors.mainBrandColor};
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
  transition: all .5s ease;
  padding: 10px 20px;
  cursor: pointer;
  width: calc(100% - 40px);
  position: relative;
  background: white;
  
  a {
    color: ${(props) => props.theme.colors.mainBrandColor};
    text-decoration: none;
    
    &:hover {
      color: ${(props) => props.theme.colors.white};;
    }
  }

  &:hover {
    background: ${(props) => props.theme.colors.mainBrandColor};
    color: ${(props) => props.theme.colors.white};
  }
`;
