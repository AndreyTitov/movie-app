/**
 * @file
 * Contains selected movie component.
 */
import React, { useEffect, useState } from 'react';
import MainLayout from '../../common/layouts/Main.layout';
import { useParams } from 'react-router-dom';
import { compose } from 'recompose';
import { inject } from 'mobx-react';
import {
  MovieContainer,
  MovieTopWrapper,
  MovieTopRightColumn,
  MovieTopLeftColumn,
  MoviePosterWrapper,
  MovieAverageRateWrapper,
  MovieAverageRate,
  MovieGenresWrapper,
  MoviesLinksWrapper,
  MovieGenresTitle,
  MovieGenre,
  MovieGenreWrapper,
  MovieTrailer,
  MovieTrailerWrapper,
  MovieTrailerTitle,
  CreditsContainer,
  CreditsTitle,
  CreditsWrapper,
  CastActorCardWrapper,
  CastActorCardImageWrapper,
  CastActorInfo,
  ImdbIcon,
  BrowserIcon,
  MovieTitle,
  MovieTagline,
  MovieDescription,
  MoviesLinksTitle,
  MoviesLinksContainer,
  MovieContentWrapper,
} from './Movie.style';
import { IMAGE_URL } from 'common/constants/api.constant';
import YoutubeIframe from 'common/components/YoutubeIframe/YoutubeIframe';
import { YOUTUBE_LINK } from 'common/constants/video.constant';
import CarouselElement from 'common/components/CarouselElement/CarouselElement';
import NoActorAvatar from 'common/assets/icons/no-avatar.png';
import SpinnerElement from 'common/components/SpinnerElement/SpinnerElement';
import TooltipElement from 'common/components/TooltipElement/TooltipElement';

const Movie = (props) => {
  const { moviesStore } = props;

  const { movieId } = useParams();

  /**
   * Loader flag.
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Movie data.
   */
  const [movieData, setMovieData] = useState({});

  /**
   * Trailer link.
   */
  const [trailerLink, setTrailerLink] = useState('');

  /**
   * Credits data.
   */
  const [creditsData, setCreditsData] = useState('');

  /**
   * Get current movie data.
   */
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await moviesStore.setMovieData(movieId);
        const credits = await moviesStore.setMovieCredits(movieId);
        const movieVideoData = await moviesStore.setMovieVideos(movieId);
        const movieVideos = movieVideoData.results.filter((video) => {
          return video.type === 'Trailer';
        })
        setTrailerLink(`${YOUTUBE_LINK}${movieVideos[0].key}`)
        setMovieData(data);
        setCreditsData(credits);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    })();
  }, [moviesStore, movieId]);

  /**
   * Render movie info.
   */
  const renderMovieInfo = () => {
    return (
      <>
        <MovieTitle>{movieData.original_title}</MovieTitle>
        {movieData.tagline && (
          <MovieTagline>" {movieData.tagline} "</MovieTagline>
        )}
        <MovieDescription>{movieData.overview}</MovieDescription>
        <MovieGenresWrapper>
          <MovieGenresTitle>
            Genres:
          </MovieGenresTitle>
          <MovieGenreWrapper>
            {movieData.genres && movieData.genres.length && (
              movieData.genres.map((genre) => (
                <MovieGenre key={genre.name}>
                  {genre.name}
                </MovieGenre>
              ))
            )}
          </MovieGenreWrapper>
        </MovieGenresWrapper>
        <MoviesLinksContainer>
          <MoviesLinksTitle>Links:</MoviesLinksTitle>
          <MoviesLinksWrapper>
            <TooltipElement trigger="hover" placement="top" title="Visit movie page">
              <a
                href={movieData.homepage}
                target="_blank"
              >
                <BrowserIcon/>
              </a>
            </TooltipElement>
            <TooltipElement trigger="hover" placement="top" title="Visit movie in IMdB">
              <a
                href={`https://www.imdb.com/title/${movieData.imdb_id}I?&autoplay=1`}
                target="_blank"
              >
                <ImdbIcon/>
              </a>
            </TooltipElement>
          </MoviesLinksWrapper>
        </MoviesLinksContainer>
      </>
    )
  };

  /**
   * Render movie poster.
   */
  const renderMoviePoster = () => {
    return (
      <MoviePosterWrapper>
        {movieData.poster_path && <img src={`${IMAGE_URL}${movieData.poster_path}`} alt=""/>}
        <MovieAverageRateWrapper>
          Average rate
          <MovieAverageRate>
            {movieData.vote_average}
          </MovieAverageRate>
        </MovieAverageRateWrapper>
      </MoviePosterWrapper>
    )
  };

  /**
   * Render movie credit.
   */
  const renderCredits = () => {
    return (
      <CreditsContainer>
        <CreditsTitle>Actors</CreditsTitle>
        <CreditsWrapper>
          {creditsData && (
            <CastActorCardWrapper>
              {creditsData && (
                <CarouselElement>
                  {creditsData.cast.map((actor) => (
                    <CastActorCardWrapper key={actor.profile_path}>
                      <CastActorCardImageWrapper>
                        <img src={actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : NoActorAvatar} alt=""/>
                      </CastActorCardImageWrapper>
                      <CastActorInfo>
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                      </CastActorInfo>
                    </CastActorCardWrapper>
                  ))}
                </CarouselElement>
              )}
            </CastActorCardWrapper>
          )}
        </CreditsWrapper>
      </CreditsContainer>
    )
  };

  /**
   * Render trailer info.
   */
  const renderTrailerInfo = () => {
    return (
      <MovieTrailerWrapper>
        <MovieTrailerTitle>Trailer</MovieTrailerTitle>
        <MovieTrailer>
          {trailerLink && <YoutubeIframe height={600} src={trailerLink}/>}
        </MovieTrailer>
      </MovieTrailerWrapper>
    )
  };

  return (
    <MainLayout>
      <MovieContainer>
        {(!isLoading && Object.keys(movieData).length) ? (
          <>
            <MovieTopWrapper background={`${IMAGE_URL}${movieData.backdrop_path}`}>
              <MovieContentWrapper>
                <MovieTopLeftColumn>
                  {renderMovieInfo()}
                </MovieTopLeftColumn>
                <MovieTopRightColumn>
                  {renderMoviePoster()}
                </MovieTopRightColumn>
              </MovieContentWrapper>
            </MovieTopWrapper>

            {renderCredits()}

            {renderTrailerInfo()}
          </>
        ) : (
          <SpinnerElement/>
        )}
      </MovieContainer>
    </MainLayout>
  )
};

export default compose(inject('moviesStore'))(Movie);
