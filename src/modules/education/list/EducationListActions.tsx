import Errors from "../../shared/error/errors";
import EducationService from "../educationService";

const prefix = "EDUCATION";
const EducationListActions = {
  LIST_STARTED: `${prefix}_LIST_STARTED`,
  LIST_SUCCESS: `${prefix}_LIST_SUCCESS`,
  LIST_ERROR: `${prefix}_LIST_ERROR`,

  doFetch: () => async (disptach) => {
    try {
      disptach({ type: EducationListActions.LIST_STARTED });
      const response = await EducationService.list();
      disptach({
        type: EducationListActions.LIST_SUCCESS,
        payload: { rows: response.rows },
      });
    } catch (error) {
      Errors.handle(error);
      disptach({ type: EducationListActions.LIST_ERROR });
    }
  },
};
export default EducationListActions;
