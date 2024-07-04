const hostname = window && window.location && window.location.hostname;
const base_url = "/";
const apikey_dev = process.env.REACT_APP_BASE_API_KEY_DEY;
const apikey_prod = "";

let base_api;
let external_link;
let api_key;

const config = {
  base_api: {
    dirty: "",
    beta: process.env.REACT_APP_BASE_BETA_API_URL,
    alpha: "",
    north: "",
    prod: "",
  },
};

switch (true) {
  case /dirty/.test(hostname):
    base_api = config.base_api.dirty;
    api_key = apikey_dev;
    break;

  case /alpha/.test(hostname):
    base_api = config.base_api.alpha;
    api_key = apikey_dev;
    break;

  case /beta/.test(hostname):
    base_api = config.base_api.beta;
    api_key = apikey_dev;
    break;

  case /prod/.test(hostname):
    base_api = config.base_api.beta;
    api_key = apikey_prod;
    break;

  default:
    base_api = config.base_api.beta;
    api_key = apikey_dev;
    break;
}

export { base_url, base_api, api_key, external_link };
