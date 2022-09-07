/**
 * @file
 * Contains api client factory service.
 */
import axios from 'axios';

const axiosClient = (config) => {
  const { baseUrl, headers } = config;

  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

export default axiosClient;
