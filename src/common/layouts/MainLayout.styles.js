/**
 * @file
 * Contains Main layout styles.
 */
import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  
`;

export const Header = styled.div`
  background: ${(props) => props.theme.colors.darkGrey};
  color: ${(props) => props.theme.colors.mainBrandColor};
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 99;
  filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.colors.darkGrey});
`;

export const HeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  width: 80px;
`;

export const Logo = styled.img`
  
`;

export const Content = styled.div`
  
`;

export const NavigationDesktopWrapper = styled.div`
  width: 60%;
`;

export const NavigationLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  li {
    a {
      color: ${(props) => props.theme.colors.mainBrandColor};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 16px;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  max-width: 400px;
  min-width: 200px;
`;


