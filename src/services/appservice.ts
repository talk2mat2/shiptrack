import {api} from './api';
import {serviceUrl} from './serviceUrl';
export const appService = {
  login: async function (payload: {}) {
    return api()
      .post(serviceUrl.login, payload)
      .then(res => res)
      .catch(err => {
        // console.log(err?.response?.data?.message)
        return err?.response?.data;
      });
  },
  fetch_list: async function (payload:{}) {
    return api()
      .post(serviceUrl.fetch_list,payload)
      .then(res => res)
      .catch(err => {
        // console.log(err?.response?.data?.message)
        return err?.response?.data;
      });
  },
};
