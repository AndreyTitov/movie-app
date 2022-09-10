/**
 * @file
 * Contains stores.
 */
import MoviesStore from 'common/stores/movies.store';
import ActorsStore from 'common/stores/actors.store';

export {
  MoviesStore,
  ActorsStore,
};

const moviesStore = new MoviesStore();
const actorsStore = new ActorsStore();

const stores = {
  moviesStore,
  actorsStore,
};

export default stores;
