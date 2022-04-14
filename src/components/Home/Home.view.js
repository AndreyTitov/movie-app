/**
 * @file
 * Contains component home.
 */
import React from 'react';
import MainLayout from '../../common/layouts/Main.layout';
import {
  HomeContainer,
  HomeHeroSection,
  HomeHeroTitle,
  HomeHeroDescriptionContainer,
  HomeHeroSubTitle,
} from './Home.styles';
import HomeDesktopBackground from 'common/assets/icons/home-background.jpeg';

const Home = () => {
  return (
    <MainLayout>
      <HomeContainer>
        <HomeHeroSection background={HomeDesktopBackground}>
          <HomeHeroDescriptionContainer>
            <HomeHeroTitle>Hola, senior! <br/>Welcome to movie app!</HomeHeroTitle>
            <HomeHeroSubTitle>This website created with <a href="https://www.themoviedb.org/">The movie db</a> API</HomeHeroSubTitle>
          </HomeHeroDescriptionContainer>
        </HomeHeroSection>
      </HomeContainer>
    </MainLayout>
  )
};

export default Home;
