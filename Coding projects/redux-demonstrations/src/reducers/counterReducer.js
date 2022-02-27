import { INCREMENT } from '../constants';

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT: 
      console.log(`Inside the reducer. Number is: ${action.payload}, action type: ${action.type}`);
      return state + action.payload;
    default: return state;
  }
};