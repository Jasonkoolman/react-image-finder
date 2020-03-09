const API_URL = 'https://api.thecatapi.com/v1';

/**
 * Find a cat image using the given criteria.
 *
 * @param  {String} query
 * @return {Promise<{url: (string|null)}>}
 */
export function findImage(query) {
  const url = `${API_URL}/images/search?q=${query}`;

  return fetch(url)
      .then(res => res.json())
      .then(res => res.length ? res[0].url : null)
}
