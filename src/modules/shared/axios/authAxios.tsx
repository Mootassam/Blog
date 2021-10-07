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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWYzYjRlNGNhMDhmNmQ4MDU2Zjk1YSIsImlhdCI6MTYzMzYzMTA1NCwiZXhwIjoxNjM0MjM1ODU0fQ.6Rn2QZ10GEZ84ijCeOPhkag3y6RxBzIrwSEgL4M4G1Y";

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
