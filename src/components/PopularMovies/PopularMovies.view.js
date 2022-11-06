/**
 * @file
 * Contains PopularMovies component.
 */
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MainLayout from '../../common/layouts/Main.layout';
import {
  PopularMovieContainer,
  PopularMoviesContainer,
  PopularMovieWrapper,
  PopularMovieDescriptionWrapper,
  MovieWrapper,
  MoviesRow,
  MoviesCol,
  MovieInfo,
  MovieMoreInfo,
  Button,
  PopularMoviesTitleWrapper,
  PopularMoviesWrapper,
} from './PopularMovies.style';
import { inject } from 'mobx-react';
import { compose } from 'recompose';
import { IMAGE_URL } from '../../common/constants/api.constant';
import Loader from '../../common/components/Loader/Loader';
import MoviesService from '../../common/services/movies.service';
import NoPoster from 'common/assets/icons/no-poster.png';
import InfiniteScroll from 'react-infinite-scroller';
import SpinnerElement from 'common/components/SpinnerElement/SpinnerElement';

const PopularMovies = (props) => {

  const { moviesStore } = props;

  /**
   * Path and url of route.
   */
  const { url } = useRouteMatch();

  /**
   * Loader flag.
   */
  const [loading, setLoading] = useState(false);

  /**
   * Popular movies.
   */
  const [popularMovies, setPopularMovies] = useState([]);

  /**
   * Current page of popular movies.
   */
  const [page, setPage] = useState(1);

  /**
   * Get popular movies.
   */
  useEffect(() => {
    setLoading(true);
    (async () => {
      const popularMoviesData = await MoviesService.getPopularMovies(page);
      await moviesStore.setPopularMovies(popularMoviesData.results);
      const moviesData = moviesStore.getPopularMovies;
      moviesData.length && setPopularMovies([...popularMovies, ...moviesData]);
      moviesData.length && setLoading(false);
    })();
  }, [page]);

  /**
   * Render popular movies list.
   */
  const renderPopularMovies = () => {
    return (
      <PopularMoviesContainer>
        <PopularMoviesTitleWrapper>
          <h3>Popular movies</h3>
        </PopularMoviesTitleWrapper>
        <MoviesRow>
          {popularMovies.length && (
            <PopularMoviesWrapper>
              {popularMovies.map((movie, index) => (
                <MoviesCol key={movie.id * index}>
                  <MovieWrapper background={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : NoPoster}>
                    <img src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : NoPoster} alt=""/>
                    <MovieMoreInfo>
                      More Info
                    </MovieMoreInfo>
                    <MovieInfo>
                      <p>{movie.title}</p>
                      <p>Rate: {movie.vote_average}</p>
                    </MovieInfo>
                    <Link to={`${url}/${movie.id}`}>See more</Link>
                  </MovieWrapper>
                </MoviesCol>
              ))}
            </PopularMoviesWrapper>
          )}
        </MoviesRow>
        {loading && <Loader/>}
        <Button onClick={loadMoreMoviesHandler}>Load more</Button>
      </PopularMoviesContainer>
    )
  };

  /**
   * Load more movies.
   */
  const loadMoreMoviesHandler = () => {
    setPage(() => page + 1);
  };

  return (
    <MainLayout>
      <PopularMovieContainer>
        {popularMovies.length ? (
          <>
            {popularMovies.length && (
              <PopularMovieWrapper background={`${IMAGE_URL}${popularMovies[0].backdrop_path}`}>
                <PopularMovieDescriptionWrapper>
                  <h3>{popularMovies[0].title}</h3>
                  <p>{popularMovies[0].overview}</p>
                </PopularMovieDescriptionWrapper>
              </PopularMovieWrapper>
            )}
            {renderPopularMovies()}
          </>
        ) : (
          <SpinnerElement />
        )}
      </PopularMovieContainer>
    </MainLayout>
  )
};

export default compose(inject('moviesStore'))(PopularMovies);