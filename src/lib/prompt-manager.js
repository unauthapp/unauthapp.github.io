const { CONSTANTS } = require('../constants');

const PROMPT = {};

const show = (text, onOk, onCancel) => {
  return PROMPT[CONSTANTS.FUNCTION.POPUP_SHOW](text, onOk, onCancel);
};

const hide = () => {
  return PROMPT[CONSTANTS.FUNCTION.POPUP_HIDE]();
}


const set = (key, value) => {
  PROMPT[key] = value;
};


export default {
  show,
  hide,
  set
};
