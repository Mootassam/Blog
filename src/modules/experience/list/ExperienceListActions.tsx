import React from "react";
import Errors from "../../shared/error/errors";
import EmploymentHistoryService from "../employmentHistoryService";
const prefix = "EXPERIENCE";
const ExperienceListActions = {
  LIST_STARTED: `${prefix}_LIST_STARTED`,
  LIST_SUCCESS: `${prefix}_LIST_SUCCESS`,
  LIST_ERROR: `${prefix}_LIST_ERROR`,

  DoFetch: () => async (dispatch) => {
    try {
      dispatch({ type: ExperienceListActions.LIST_STARTED });
      const response = await EmploymentHistoryService.list();
      dispatch({
        type: ExperienceListActions.LIST_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: ExperienceListActions.LIST_ERROR });
    }
  },
};

export default ExperienceListActions;
