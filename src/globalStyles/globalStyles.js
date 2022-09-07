/**
 * @file
 * Contains global styles.
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Dosis', sans-serif;
    color: black;
    background: ${(props) => props.theme.colors.darkPurple};
  }
  
  h3 {
    padding: 0;
    margin: 0;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin: 0;
      padding: 0;
    }
  }
  
  div {
    color: white;
  }
`;

export default GlobalStyles;
