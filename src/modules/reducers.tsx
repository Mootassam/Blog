/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import contact from "src/modules/contact/ContactReducers";
export default () =>
  combineReducers({
    contact,
  });
