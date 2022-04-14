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
  CastActorCard,
} from './Movie.style';
import { IMAGE_URL } from '../../common/constants/api.constant';
// import { ReactComponent as Imdb } from '../../common/assets/icons/imdb.svg';
// import { ReactComponent as LinkIcon } from '../../common/assets/icons/linksvg.svg';
import YoutubeIframe from '../../common/components/YoutubeIframe/YoutubeIframe';
import { YOUTUBE_LINK } from '../../common/constants/video.constant';
import Loader from '../../common/components/Loader/Loader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NoActorAvatar from 'common/assets/icons/no-avatar.png';

const Movie = (props) => {
  const { moviesStore } = props;

  const { movieId } = useParams();

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
      } catch (e) {
        console.error(e);
      }
    })();
  }, [moviesStore, movieId]);

  /**
   * Render movie credit.
   */
  const renderCredits = () => {
    return (
      <CreditsContainer>
        <CreditsTitle>Actors</CreditsTitle>
        <CreditsWrapper>
          {creditsData ? (
            <CastActorCardWrapper>
              <Carousel
                axis="horizontal"
                emulateTouch={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                dynamicHeight={true}
                centerMode={true}
              >
                  {creditsData.cast.map((actor) => (
                    <CastActorCard key={actor.id}>
                      <img src={IMAGE_URL ? `${IMAGE_URL}${actor.profile_path}` : NoActorAvatar} alt={actor.name} />
                      {actor.name}
                    </CastActorCard>
                  ))}
              </Carousel>
            </CastActorCardWrapper>
          ) : (
            <Loader />
          )}
        </CreditsWrapper>
      </CreditsContainer>
    )
  };

  return (
    <MainLayout>
      <MovieContainer>
        <MovieTopWrapper>
          <MovieTopLeftColumn>
            <h3>{movieData.original_title}</h3>
            <p>{movieData.overview}</p>
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
            <MoviesLinksWrapper>
              <a href={movieData.homepage}>Movie link</a>
              <a href={`https://www.imdb.com/title/${movieData.imdb_id}I?&autoplay=1`}>Imdb</a>
            </MoviesLinksWrapper>
          </MovieTopLeftColumn>
          <MovieTopRightColumn>
            <MoviePosterWrapper>
              {movieData.poster_path && <img src={`${IMAGE_URL}${movieData.poster_path}`} alt=""/>}
            </MoviePosterWrapper>
            <MovieAverageRateWrapper>
              Average rate
              <MovieAverageRate>
                {movieData.vote_average}
              </MovieAverageRate>
            </MovieAverageRateWrapper>
          </MovieTopRightColumn>
        </MovieTopWrapper>
        {renderCredits()}
        <MovieTrailerWrapper>
          <MovieTrailerTitle>Trailer</MovieTrailerTitle>
          <MovieTrailer>
            {trailerLink && <YoutubeIframe height={400} src={trailerLink}/>}
          </MovieTrailer>
        </MovieTrailerWrapper>
      </MovieContainer>
    </MainLayout>
  )
};

export default compose(inject('moviesStore'))(Movie);
