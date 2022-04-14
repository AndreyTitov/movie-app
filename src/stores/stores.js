/**
 * @file
 * Contains stores.
 */
import MoviesStore from '../common/stores/movies.store';

export {
  MoviesStore,
};

const moviesStore = new MoviesStore();

const stores = {
  moviesStore,
};

export default stores;
