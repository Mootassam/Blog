import Errors from "../../shared/error/errors";
import ContactService from "../contactService";

const prefix = "CONTACT_DETAILL";
const ContactViewActions = {
  FIND_STARTED: `${prefix}_STARTED`,
  FIND_SUCCESS: `${prefix}_SUCCESS`,
  FIND_ERROR: `${prefix}_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({ type: ContactViewActions.FIND_STARTED });
      const response = await ContactService.find(id);
      dispatch({
        type: ContactViewActions.FIND_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: ContactViewActions.FIND_ERROR });
    }
  },
};
export default ContactViewActions;
