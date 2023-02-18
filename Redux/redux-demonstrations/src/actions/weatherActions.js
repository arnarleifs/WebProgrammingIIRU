import * as weatherService from '../services/weatherService';
import { GET_CURRENT_DEGREE } from '../constants';

export const getCurrentDegree = () => async dispatch => {
  const currentDegree = await weatherService.getCurrentDegree();
  dispatch(getCurrentDegreeSuccess(currentDegree));
};

const getCurrentDegreeSuccess = currentDegree => ({
  type: GET_CURRENT_DEGREE,
  payload: currentDegree
});