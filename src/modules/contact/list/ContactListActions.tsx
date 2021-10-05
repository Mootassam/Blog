import ContactService from "../contactService";
import selectors from "src/modules/contact/list/contactListSelectors";
import Errors from "../../shared/error/errors";
const prefix = "CONTACT_LIST";
const ContactListActions = {
  LIST_STARTED: `${prefix}_STARTED`,
  LIST_SUCCESS: `${prefix}_SUCCESS`,
  LIST_ERROR: `${prefix}_ERROR`,

  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: ContactListActions.LIST_STARTED,
        });
        const response = await ContactService.list();

        dispatch({
          type: ContactListActions.LIST_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);
        dispatch({ type: ContactListActions.LIST_ERROR });
      }
    },
};
export default ContactListActions;
