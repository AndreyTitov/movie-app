/**
 * @file
 * Contains Main layout.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MainLayoutContainer,
  Header,
  Content,
  HeaderWrapper,
  LogoWrapper,
  Logo,
  NavigationDesktopWrapper,
  NavigationLinksList,
  SearchBarWrapper,
  MobileMenuButtonIconWrapper,
  MobileMenuIcon,
  MobileMenuContainer,
  MobileMenuBackdrop,
  NavigationMobileLinksList,
  CloseMobileMenuIconWrapper,
  CloseIcon,
  MobileMenuHeader,
  MobileMenuLogoWrapper,
} from './MainLayout.styles';
import TMDBLogo from '../../common/assets/icons/logo.svg';
import SearchBarElement from '../components/SearchBar/SearhBar';
import { useAuth0 } from '@auth0/auth0-react';

const MainLayout = (props) => {
  const { children } = props;

  const { logout } = useAuth0();

  /**
   * Show mobile menu.
   */
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  /**
   * Render mobile menu button.
   */
  const renderMobileMenuButton = () => {
    return (
      <MobileMenuButtonIconWrapper onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <MobileMenuIcon />
      </MobileMenuButtonIconWrapper>
    )
  };

  /**
   * Render mobile menu.
   */
  const renderMobileMenu = () => {
    return (
      <>
        <MobileMenuBackdrop
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          showMenu={showMobileMenu}
        />
        <MobileMenuContainer showMenu={showMobileMenu}>
          <CloseMobileMenuIconWrapper onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <CloseIcon />
          </CloseMobileMenuIconWrapper>
          <MobileMenuHeader>
            <MobileMenuLogoWrapper>
              <Link to={'/'}><Logo src={TMDBLogo} /></Link>
            </MobileMenuLogoWrapper>
          </MobileMenuHeader>
          <NavigationMobileLinksList>
            <li><Link to={'/movies'}>Popular Movies</Link></li>
            <li><Link to={'/actors'}>Popular Actors</Link></li>
          </NavigationMobileLinksList>
        </MobileMenuContainer>
      </>
    )
  }

  return (
    <MainLayoutContainer>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to={'/'}><Logo src={TMDBLogo} /></Link>
          </LogoWrapper>
          <NavigationDesktopWrapper>
            <NavigationLinksList>
              <li><Link to={'/movies'}>Popular Movies</Link></li>
              <li><Link to={'/actors'}>Popular Actors</Link></li>
            </NavigationLinksList>
          </NavigationDesktopWrapper>
          <SearchBarWrapper>
            <SearchBarElement placeholder="Search movie" />
            {renderMobileMenuButton()}
          </SearchBarWrapper>
        </HeaderWrapper>
      </Header>
      <Content>
        {renderMobileMenu()}
        {children}
      </Content>
    </MainLayoutContainer>
  )
};

export default MainLayout;
