/**
 * @file
 * Contains movies store.
 */
import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import moviesService from '../services/movies.service';

class MoviesStore {
  constructor () {
    makeObservable(this, {
      popularMovies: observable,

      getPopularMovies: computed,

      setPopularMovies: action,
      setMovieData: action,
      setMovieCredits: action,
      searchMovie: action,
    });
  };

  /**
   * Popular movies data,
   */
  popularMovies = [];

  /**
   * Get popular movies data.
   */
  get getPopularMovies () {
    return this.popularMovies;
  };

  /**
   * Set Popular movies.
   * @param {array} data.
   * Page of popular movies.
   */
  setPopularMovies = async (data) => {
    try {
      runInAction(() => {
        this.popularMovies = data;
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * Get movie data.
   * @param {number} id.
   * Movie id.
   */
  setMovieData = async (id) => {
    try {
      return await moviesService.getMovieData(id);
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * Get movie data.
   * @param {number} id.
   * Movie id.
   */
  setMovieVideos = async (id) => {
    try {
      return await moviesService.getMovieVideo(id);
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * Movie credits.
   * @param {number} id.
   * Id of movie.
   */
  setMovieCredits = async (id) => {
    try {
      return await moviesService.getMovieCredits(id);
    } catch (e) {
      throw new Error(e);
    }
  };

  /**
   * Search movie.
   * @param {number} page.
   * Page number.
   * @param {boolean} adult.
   * Including adult movies.
   * @param {string} movieName.
   * Movie name.
   */
  searchMovie = async (page, adult, movieName) => {
    try {
      return await moviesService.searchMovie(page, adult, movieName);
    } catch (e) {
      throw new Error(e);
    }
  }
};

export default MoviesStore;
