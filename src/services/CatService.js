const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = '129bf7b6-c59d-4d63-b617-3c084c2a083d';

/**
 * Find a cat image using the given criteria.
 *
 * @param  {String} query
 * @return {Promise<string|null>}
 */
export function findImage(query) {
  const url = `${API_URL}/images/search?q=${query}`;

  return fetch(url)
      .then(res => res.json())
      .then(res => res.length ? res[0].url : null)
}


/**
 * Find a cat by the given breed.
 *
 * @param  {String} query
 * @return {Promise<string|null>}
 */
export function findCatByBreed(query) {
  const url = `${API_URL}/breeds/search?q=${query}`;
  const headers = { 'x-api-key': API_KEY };

  return fetch(url, { headers })
      .then(res => res.json())
      .then(res => res.length ? res[0].url : null)
}
