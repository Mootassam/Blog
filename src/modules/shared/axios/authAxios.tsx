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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNThlYjdiZmVlNDNiZjFmZTA3ZGFmMCIsImlhdCI6MTYzMzIxNzQwMywiZXhwIjoxNjMzODIyMjAzfQ.NXVB455PF3KLJlaiVbhs0qu0xxqV-sZiPytwa3r-CUI";

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
