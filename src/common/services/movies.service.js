/**
 * @file
 * Contains movies service.
 */
import { pureClient } from './apiClient.service';
import {
  MAIN_API_URL,
  MOVIE,
  POPULAR,
  API_KEY,
  LANGUAGE,
  MOVIES_PAGE,
  VIDEOS,
  SEARCH_MOVIE,
  CREDITS,
} from '../constants/api.constant';

/**
 * Get popular movies
 * @param {number} page.
 * Number of popular movies page.
 */
const getPopularMovies = async (page) => {
  const response = await pureClient.get(`${MAIN_API_URL}${MOVIE}${POPULAR}${API_KEY}${LANGUAGE}${MOVIES_PAGE}${page}`);
  return response.data;
};

/**
 * Get movie data.
 * @param {number} id.
 * Movie id.
 */
const getMovieData = async (id) => {
  const response = await pureClient.get(`${MAIN_API_URL}${MOVIE}/${id}${API_KEY}${LANGUAGE}`);
  return response.data;
};

/**
 * Get movie video.
 * @param {number} id.
 * Movie id.
 */
const getMovieVideo = async (id) => {
  const response = await pureClient.get(`${MAIN_API_URL}${MOVIE}/${id}${VIDEOS}${API_KEY}${LANGUAGE}`);
  return response.data;
}

/**
 * Search movies.
 * @param {number} page.
 * Page number.
 * @param {boolean} adult.
 * Including adult movies.
 * @param {string} movieName.
 * Movie name.
 */
const searchMovie = async (page, adult,movieName,) => {
  const response = await pureClient.get(`${SEARCH_MOVIE}${API_KEY}${LANGUAGE}`, { params: {
    page: page,
    include_adult: adult,
    query: movieName,
  }});
  return response.data;
};

/**
 * Get movies credits.
 * @param {number} id.
 * Movie id.
 */
const getMovieCredits = async (id) => {
  const response = await pureClient.get(`${MAIN_API_URL}${MOVIE}/${id}${CREDITS}${API_KEY}${LANGUAGE}`);
  return response.data;
};

const moviesService = {
  getPopularMovies,
  getMovieData,
  getMovieVideo,
  searchMovie,
  getMovieCredits,
};

export default moviesService;
