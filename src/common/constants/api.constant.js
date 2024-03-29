/**
 * @file
 * Contains api constants.
 */
export const MAIN_API_URL = 'https://api.themoviedb.org/3';
export const MOVIE = '/movie';
export const POPULAR = '/popular';
export const VIDEOS = '/videos';
export const CREDITS = '/credits';
export const PERSON = '/person';
export const API_KEY = '?api_key=c89f97bcb4e931a6e41fc6678a34c6cb';
export const LANGUAGE = '&language=en-US';
export const MOVIES_PAGE = '&page=';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie';

export const POPULAR_ACTORS = `${MAIN_API_URL}${PERSON}${POPULAR}${API_KEY}${LANGUAGE}${MOVIES_PAGE}`;
