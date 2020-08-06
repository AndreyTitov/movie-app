/**
 * @file
 * Contains API client factory service.
 */

import axios from 'axios';

export default (config) => {
    return axios.create({
        baseURL: config.baseUrl,
        headers: config.headers,
    });
};
