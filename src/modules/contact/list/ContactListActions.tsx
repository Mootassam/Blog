import ContactService from "../contactService";
import selectors from "src/modules/contact/list/ContactListSelectors";
const prefix = "CONTACT_LIST";
const ContactListActions = {
  LIST_STARTED: `${prefix}_LIST_STARTED`,
  LIST_SUCCESS: `${prefix}_LIST_SUCCESS`,
  LIST_ERROR: `${prefix}_LIST_ERROR`,

  doFind:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: ContactListActions.LIST_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });
        const response = await ContactService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState())
        );

        dispatch({
          type: ContactListActions.LIST_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        dispatch({ type: ContactListActions.LIST_ERROR });
      }
    },
};
export default ContactListActions;
