const STORE = {};

const get = (key) => {
  return STORE[key];
};


const set = (key, value) => {
  STORE[key] = value;
};


export default {
  get,
  set
};
