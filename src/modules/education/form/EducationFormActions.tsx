import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";
import EducationService from "../educationService";
import { getHistory } from "src/modules/store";
const prefix = "EDUCATION";
const EducationFormActions = {
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,
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
};
export default EducationFormActions;
