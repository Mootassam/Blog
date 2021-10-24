import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";
import EducationService from "../educationService";
import { getHistory } from "src/modules/store";
const prefix = "EDUCATION";
const EducationFormActions = {
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,
  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({ type: EducationFormActions.CREATE_STARTED });
      await EducationService.create(values);
      dispatch({ type: EducationFormActions.CREATE_SUCCESS });
      Message.success("Education added with success");
      getHistory().push("/education");
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: EducationFormActions.CREATE_ERROR });
    }
  },

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({ type: EducationFormActions.INIT_STARTED });
      const response = await EducationService.find(id);
      dispatch({ type: EducationFormActions.INIT_SUCCESS, payload: response });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: EducationFormActions.INIT_ERROR });
    }
  },
};
export default EducationFormActions;
