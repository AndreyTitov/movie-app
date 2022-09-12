/**
 * @file
 * Contains Main layout styles.
 */
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export const MainLayoutContainer = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  animation: gradientBG 15s ease infinite;
`;

export const Header = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.mainBrandColor};
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 99;
  filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.colors.darkGrey});

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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
  width: 60px;
  
  @media (min-width: 992px) {
    width: 80px;
  }
`;

export const Logo = styled.img`
  
`;

export const Content = styled.div`
  
`;

export const NavigationDesktopWrapper = styled.div`
  width: 60%;
  display: none;
  
  @media (min-width: 992px) {
    display: block;
  }
`;

export const NavigationLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  li {
    margin-left: 20px;
    
    a {
      color: ${(props) => props.theme.colors.mainBrandColor};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 16px;
    }
  }
`;

export const NavigationMobileLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;

  li {
    margin-bottom: 20px;
    
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
  display: flex;
  align-items: center;
`;

export const MobileMenuButtonIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled(GiHamburgerMenu)`
  color: ${(props) => props.theme.colors.mainBrandColor};
  font-size: 24px;
  width: 100%;
  height: 100%;
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) =>  props.showMenu ? '0' : '-100%'};
  background: ${(props) => props.theme.colors.backgroundColor};
  width: ${(props) =>  props.showMenu ? 'calc(100% - 60px)' : '0'};
  height: 100%;
  z-index: 999;
  transition: all .5s ease;
`;

export const MobileMenuBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.mainBrandColor};
  opacity: 0.9;
  width: 100%;
  height: 100%;
  z-index: 998;
  display: ${(props) =>  props.showMenu ? 'block' : 'none'};
`;

export const CloseMobileMenuIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: calc(24px - 60px);
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled(GrClose)`
  color: ${(props) => props.theme.colors.backgroundColor};
  font-size: 24px;
  width: 100%;
  height: 100%;
`;

export const MobileMenuHeader = styled.div`
  padding: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 80%;
    height: 2px;
    background: ${(props) => props.theme.colors.mainBrandColor};
  }
`;

export const MobileMenuLogoWrapper = styled.div`
  width: 40px;
`;
