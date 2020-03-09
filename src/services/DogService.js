const API_URL = 'https://dog.ceo/api';

export function findImage(breed) {
  const url = `${API_URL}/breed/${breed}/images/random`;

  return fetch(url)
      .then(res => res.ok ? res.json() : null)
      .then(res => (res ? res.message : res));
}
