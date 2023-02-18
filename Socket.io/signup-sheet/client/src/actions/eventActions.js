import { GET_EVENTS } from "../constants";
import fetch from "../utilities/fetchUtility";

export const getEvents = () => async dispatch => {
  const res = await fetch('events');
  if (res.ok) {
    dispatch(setEvents(await res.json()));
  }
};

export const setEvents = events => ({ type: GET_EVENTS, payload: events });