import { SET_USER } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_USER: return action.payload;
    default: return state;
  }
};