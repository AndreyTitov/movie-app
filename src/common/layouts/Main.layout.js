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
} from './MainLayout.styles';
import TMDBLogo from '../../common/assets/icons/logo.svg';
import SearchBarElement from '../components/SearchBar/SearhBar';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <MainLayoutContainer>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to={'/'}><Logo src={TMDBLogo} /></Link>
          </LogoWrapper>
          <NavigationDesktopWrapper>
            <NavigationLinksList>
              <li><Link to={'/movies'}>Popular ar Movies</Link></li>
              <li><SearchBarElement placeholder="Search movie" /></li>
            </NavigationLinksList>
          </NavigationDesktopWrapper>
        </HeaderWrapper>
      </Header>
      <Content>
        {children}
      </Content>
    </MainLayoutContainer>
  )
};

export default MainLayout;
