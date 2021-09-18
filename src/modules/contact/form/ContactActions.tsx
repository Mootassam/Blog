import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";
import ContactService from "../contactService";

const prefix = "CONTACT_FORM";

const contactFormActions = {
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATED_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATED_ERROR: `${prefix}_CREATE_ERROR`,

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({ type: contactFormActions.CREATE_STARTED });
      dispatch({ type: contactFormActions.CREATED_SUCCESS });
      Message.success("Submited is Successful");
      await ContactService.create(values);
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: contactFormActions.CREATED_ERROR });
    }
  },
};
export default contactFormActions;
