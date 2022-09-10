/**
 * @file
 * Contains movies store.
 */
import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import actorsService from 'common/services/actors.service';

class ActorsStore {
  constructor () {
    makeObservable(this, {
      popularActors: observable,

      getPopularActors: computed,

      setPopularActors: action,
    });
  };

  /**
   * Popular actors.
   */
  popularActors = {};

  /**
   * Get popular actors.
   */
  get getPopularActors() {
    return this.popularActors;
  }

  /**
   * Set popular actors.
   *
   * @async
   * @function - setPopularActors.
   * @param {number} page - number of page.
   * @return list of popular actors.
   */
  setPopularActors = async (page) => {
    const popularActors = await actorsService.getPopularActors(page);
    runInAction(() => {
      this.popularActors = popularActors;
    })
    return popularActors;
  };
}

export default ActorsStore;
