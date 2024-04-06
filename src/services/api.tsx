import axios from 'axios';
const BaseUrl = 'https://shippex-demo.bc.brandimic.com';

export const api = () => {
  return axios.create({
    baseURL: BaseUrl,
    // timeout: 10000,
    headers: {
      Accept: 'application/json',
      //   Authorization: `token ${hash}`,
      'content-type': 'application/json',
      "Cookie":"full_name=Tasty%20Test; sid=3256e8ea1a6f494ab46ad658e23c231ff5e893947fe842f9726c3302; system_user=yes; user_id=test%40brandimic.com; user_image="
    },
  });
};
