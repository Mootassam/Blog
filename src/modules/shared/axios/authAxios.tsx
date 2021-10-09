import Axios from "axios";

import Qs from "qs";
import moment from "moment";

const authAxios = Axios.create({
  baseURL: "http://localhost:8080/api",
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      filter: (prefix, value) => {
        if (moment.isMoment(value) || value instanceof Date) {
          return value.toISOString();
        }

        return value;
      },
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjBhY2Q5ZmFhMzVkN2QzZDhjYmY3ZCIsImlhdCI6MTYzMzcyNTg2MCwiZXhwIjoxNjM0MzMwNjYwfQ.wLGPZP-E5VIXACXHb__WplaEvC40tLHYJZuJy2YYfbk";

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default authAxios;
