import Errors from "../../shared/error/errors";
import EducationService from "../educationService";

const prefix = "EDUCATION";
const educatiionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({ type: educatiionViewActions.FIND_STARTED });
      const response = await EducationService.find(id);
      dispatch({ type: educatiionViewActions.FIND_SUCCESS, payload: response });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: educatiionViewActions.FIND_ERROR });
    }
  },
};
export default educatiionViewActions;
