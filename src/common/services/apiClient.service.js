/**
 * @file
 * Contains API client service.
 */
import createClient from './apiClientFactory.service';
import { MAIN_API_URL } from '../constants/api.constant';

const pureClient = createClient({
  baseURL: MAIN_API_URL,
});

export { pureClient };
