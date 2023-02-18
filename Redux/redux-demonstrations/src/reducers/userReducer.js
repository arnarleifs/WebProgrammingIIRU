import { CHANGE_USER } from "../constants";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_USER: return action.payload;
    default: return state;
  }
};