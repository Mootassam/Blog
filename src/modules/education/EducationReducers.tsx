import { combineReducers } from "redux";
import form from "src/modules/education/form/EducationFormReducers";
import list from "src/modules/education/list/EducationListReducers";
export default combineReducers({
  form,
  list,
});
