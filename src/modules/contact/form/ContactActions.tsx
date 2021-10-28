import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";
import ContactService from "../contactService";
import { getHistory } from "src/modules/store";

const prefix = "CONTACT_FORM";

const contactFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATED_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATED_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATED_STARTED: `${prefix}_UPDATED_STARTED`,
  UPDATED_SUCCESS: `${prefix}_UPDATED_SUCCESS`,
  UPDATED_ERROR: `${prefix}_UPDATED_ERROR`,

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({ type: contactFormActions.CREATE_STARTED });
      await ContactService.create(values);
      dispatch({ type: contactFormActions.CREATED_SUCCESS });
      Message.success("Submited is Successful");
      getHistory().push("/contact");
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: contactFormActions.CREATED_ERROR });
    }
  },
  doInit: (id) => async (dispatch) => {
    try {
      dispatch({ type: contactFormActions.INIT_STARTED });
      let record = {};
      let data = {};
      const isEdit = Boolean(id);
      if (isEdit) {
        record = await ContactService.find(id);
      }
      dispatch({ type: contactFormActions.INIT_SUCCESS, payload: record });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: contactFormActions.INIT_ERROR });
      getHistory().push("/contact");
    }
  },

  doUpdate: (id, values) => async (dispatch) => {
    try {
      dispatch({ type: contactFormActions.UPDATED_STARTED });
      await ContactService.update(id, values);
      dispatch({ type: contactFormActions.UPDATED_SUCCESS });
      Message.success("Updated is Successful");
      getHistory().push("/contact");
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: contactFormActions.UPDATED_ERROR });
    }
  },
};
export default contactFormActions;
