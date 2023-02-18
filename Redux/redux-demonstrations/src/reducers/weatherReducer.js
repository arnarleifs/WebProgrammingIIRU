import { GET_CURRENT_DEGREE } from "../constants";

export default function weatherReducer(state = 0, action) {
  switch (action.type) {
    case GET_CURRENT_DEGREE: return action.payload;
    default: return state;
  }
}