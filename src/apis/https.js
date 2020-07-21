import axios from 'axios';

/**
 * 模組說明:有api_token的請求
 */
export const req = (api, method = 'get', params = {}, config = {}) => {
  const apiToken = 'i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC';
  const data = (method === 'get') ? 'params' : 'data';
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiToken}`,
  };
  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }
  return new Promise((resolve, reject) => {
    axios({
      url: `https://challenge.thef2e.com/api/thef2e2019/stage6/${api}`,
      method,
      [data]: params,
      headers,
    }).then(resolve)
      .catch(error => {
        console.dir(error);
        // Message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
        reject(error);
      });
  });
};