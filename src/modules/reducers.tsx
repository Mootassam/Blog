/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import contact from "src/modules/contact/ContactReducers";
import { connectRouter } from "connected-react-router";
import auth from "src/modules/auth/authReducers";
import experience from "src/modules/experience/ExperienceReducers";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    experience,
    contact,
    auth,
  });
