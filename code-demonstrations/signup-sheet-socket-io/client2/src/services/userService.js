import fetch from '../utilities/fetchUtility';

export const getUser = async () => {
  const resp = await fetch('user/info');
  if (!resp.ok) { return; }

  return await resp.json();
};

export const authenticateUser = async (username, password) => {
  const resp = await fetch('login/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (resp.ok) { return await resp.json(); }
};