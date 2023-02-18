const URL = 'http://localhost:4567';

export default (path, options) => fetch(`${URL}/${path}`, {
  credentials: 'include',
  ...options
});