/**
 * @file
 * Contains movies service.
 */
import { pureClient } from './apiClient.service';
import { POPULAR_ACTORS } from 'common/constants/api.constant';

/**
 * Get popular actors.
 *
 * @async
 * @function - getPopularActors.
 * @param {number} page - number of page.
 * @return popular actors list.
 */
const getPopularActors = (page = 1) => {
  const response = pureClient(`${POPULAR_ACTORS}${page}`);
  return response.data;
};

const actorsService = {
  getPopularActors,
};

export default actorsService;
