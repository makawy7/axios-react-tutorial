import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

// You can intercept requests or responses before they are handled by then or catch.

authFetch.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 404) {
        console.log('NOT FOUND')
    }
    return Promise.reject(error);
  }
);

export default authFetch;
