import xxxId from 'xxxid';

import { CONSTANTS } from '../constants';
import Context from './context';

const Utils = {}


Utils.generateClientId = () => {

  const clientId = Utils.uniqueId();
  Context.set(CONSTANTS.KEYS.CLIENT_ID, clientId);

  return clientId;
};


Utils.uniqueId = () => {
  return xxxId(3);
};


export default Utils;