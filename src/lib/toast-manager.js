import { CONSTANTS } from '../constants';

const TOAST = {};

const success = (text) => {
  return TOAST[CONSTANTS.FUNCTION.TOAST_SUCCESS](text);
};


const fail = (text) => {
  return TOAST[CONSTANTS.FUNCTION.TOAST_FAIL](text);
}


const set = (key, value) => {
  TOAST[key] = value;
};


export default {
  fail,
  success,
  set
};
