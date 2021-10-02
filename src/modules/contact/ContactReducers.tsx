import form from "src/modules/contact/form/ContactReducers";
import list from "src/modules/contact/list/ContactListReducers";
import { combineReducers } from "redux";

export default combineReducers({
  form,
  list,
});
