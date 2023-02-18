import fetch from "../utilities/fetchUtility";

export const createNewEvent = async event => {
  const res = await fetch('events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });

  if (res.ok) {
    return await res.json();
  }
};