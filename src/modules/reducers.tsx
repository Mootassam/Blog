/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import auth from "src/modules/auth/authReducers";
import contact from "src/modules/contact/ContactReducers";
import education from "src/modules/education/EducationReducers";
import experience from "src/modules/experience/ExperienceReducers";

import { connectRouter } from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    contact,
    education,
    experience,
  });
