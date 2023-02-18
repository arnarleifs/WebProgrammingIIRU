import { INCREMENT } from "../constants";

export const incrementCounter = number => {
  console.log(`Inside the action creator. Number is: ${number}`);
  return {
    type: INCREMENT,
    payload: number
  }
};