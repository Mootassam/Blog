import list from "src/modules/experience/list/ExperienceListReducers";
import form from "src/modules/experience/form/experienceFormReducers";

import { combineReducers } from "redux";
export default combineReducers({
  list,
  form,
});
