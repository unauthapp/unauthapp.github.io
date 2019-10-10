import Event from './event';

import { GAEVENTS } from '../../constants';

const nameEvent = (name) => {
  Event(
    GAEVENTS.CATEGORY.NAME,
    GAEVENTS.ACTION.INPUT,
    name
  );
};

const receiverInputEvent = (receiverId) => {
  Event(
    GAEVENTS.CATEGORY.RECEIVE,
    GAEVENTS.ACTION.INPUT,
    receiverId
  );
};

const websiteURLInputEvent = (url) => {
  Event(
    GAEVENTS.CATEGORY.WEBSITE,
    GAEVENTS.ACTION.INPUT,
    url
  );
};

const receiveStartEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.RECEIVE,
    GAEVENTS.ACTION.START,
    clientId
  );
};

const receiveCompleteEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.RECEIVE,
    GAEVENTS.ACTION.COMPLETE,
    clientId
  );
};

const receiveFailEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.RECEIVE,
    GAEVENTS.ACTION.FAIL,
    clientId
  );
};

const sendStartEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.SEND,
    GAEVENTS.ACTION.START,
    clientId
  );
};

const sendCompleteEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.SEND,
    GAEVENTS.ACTION.FAIL,
    clientId
  );
};


const sendFailEvent = (clientId) => {
  Event(
    GAEVENTS.CATEGORY.SEND,
    GAEVENTS.ACTION.COMPLETE,
    clientId
  );
};


export default {
  nameEvent,
  receiverInputEvent,
  websiteURLInputEvent,
  receiveStartEvent,
  receiveCompleteEvent,
  receiveFailEvent,
  sendStartEvent,
  sendCompleteEvent,
  sendFailEvent
};