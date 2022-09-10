/**
 * @file
 * Contains Main layout.
 */
import React from 'react';
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
} from './MainLayout.styles';
import TMDBLogo from '../../common/assets/icons/logo.svg';
import SearchBarElement from '../components/SearchBar/SearhBar';
import { useAuth0 } from '@auth0/auth0-react';

const MainLayout = (props) => {
  const { children } = props;

  const { logout } = useAuth0();

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
          <button onClick={() => logout()}>Log out</button>
          <SearchBarWrapper>
            <SearchBarElement placeholder="Search movie" />
          </SearchBarWrapper>
        </HeaderWrapper>
      </Header>
      <Content>
        {children}
      </Content>
    </MainLayoutContainer>
  )
};

export default MainLayout;
