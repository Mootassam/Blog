import form from "src/modules/contact/form/ContactReducers";
import list from "src/modules/contact/list/ContactListReducers";
import view from "src/modules/contact/view/ContactViewReducers";
import { combineReducers } from "redux";

export default combineReducers({
  form,
  list,
  view,
});
