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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDYzNGE5NzllYmJiYzBiOWM5MzZiMiIsImlhdCI6MTYzMTk5MDk1NCwiZXhwIjoxNjMyNTk1NzU0fQ.jYhzmtHdqmHOyQ62FQO6TLvl1lpgE8sxWlDFUr5gh28";

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
