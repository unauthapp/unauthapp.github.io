
////////// CONSTANT VALUES /////////////////

const URL_REGEX = /[htpsHTPS]{0,5}:\/\/|www\./;

const EVENTS = {
  COOKIES: {
    SET: {
      START: 'cookies:set:start',
      COMPLETE: 'cookies.set:complete'
    },
    GET: {
      START: 'cookies:get:start',
      COMPLETE: 'cookies:get:complete'
    }
  },
  SOCKET: {
    CONNECT: 'connect',
    COOKIES: {
      REQUEST: 'chrome:request:cookies',
      RECEIVE: 'chrome:receive:cookies',
      SET: {
        START: 'chrome:set:cookies:start',
        COMPLETE: 'chrome:set:cookies:complete'
      }
    }
  }
}

const DEFAULT_COOKIES = {
  'no_restriction': 'unspecified',
  'firefox-default': '0'
}

const SCHEMA = {
  url: 'url',
  name: 'name',
  value: 'value',
  domain: 'domain',
  path: 'path',
  secure: 'secure',
  httpOnly: 'httpOnly',
  sameSite: 'sameSite',
  storeId: 'storeId',
  expirationDate: 'expirationDate'
}


//////////// HELER FUNCTOINS ///////////////

const formatForChrome = (value) => {
  if (DEFAULT_COOKIES[value]) {
    return DEFAULT_COOKIES[value];
  }

  return value;
}


const formatCookie = (inputCookie) => {
  const cookie = {}
  for (let key in SCHEMA) {
    cookie[key] = formatForChrome(inputCookie[SCHEMA[key]]);
  }

  return cookie;
}



const formatDomain = (domain) => {
  return `.${domain.replace(URL_REGEX, '')}`;
}


const writeCookies = async (domain, cookies) => {
  function writeCookie(cookie) {
    return new Promise((success) => {
      chrome.cookies.set(cookie, function (createdCookie) {
        return success(createdCookie);
      });
    })
  }

  for (let cookie of cookies) {
    try {
      await writeCookie(formatCookie({ ...cookie, ...{ url: domain } }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}


const setCookies = async (data) => {
  const { domain, cookies } = data;
  try {
    await writeCookies(domain, cookies);
    receivedCookiesAck(data);
  } catch (err) {
    receivedCookiesAck(undefined);
  }
};


const readCookies = async (domain) => {
  return new Promise((success) => {
    domain = formatDomain(domain);
    chrome.cookies.getAll({ domain: domain }, function (cookies) {
      return success(cookies);
    });
  })
};


const getCookies = async (domain) => {
  const cookies = await readCookies(domain);
  sendCookies(domain, cookies);
};


//////////// EVENTS TRIGGER ////////////////


const sendCookies = (domain, cookies) => {
  chrome.runtime.sendMessage({
    type: EVENTS.COOKIES.GET.COMPLETE,
    data: { domain, cookies }
  });
};


const receivedCookiesAck = (data) => {
  chrome.runtime.sendMessage({
    type: EVENTS.COOKIES.SET.COMPLETE,
    data: data
  });
};


//////////// EXTENSION ///////////////


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(tab) {
    console.log('OPEN');
  });
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case EVENTS.COOKIES.SET.START:
      setCookies(request.data);
      break;

    case EVENTS.COOKIES.GET.START:
      getCookies(request.domain);
      break;
  }
});
