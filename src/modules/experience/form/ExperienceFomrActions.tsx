import React from "react";
import EmploymentHistoryService from "src/modules/experience/employmentHistoryService";
import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";
import { getHistory } from "../../store";
const prefix = "EXPERIENCE";
const ExperienceFomrActions = {
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  doCreate: (values) => async (disptach) => {
    try {
      disptach({ type: ExperienceFomrActions.CREATE_STARTED });
      await EmploymentHistoryService.create(values);
      disptach({ type: ExperienceFomrActions.CREATE_SUCCESS });
      Message.success("Experience added wiht sucess");
      getHistory().push("/experience");
    } catch (error) {
      Errors.handle(error);
      disptach({ type: ExperienceFomrActions.CREATE_ERROR });
    }
  },
  doUpdate: (id, values) => async (dispatch) => {
    try {
      dispatch({ type: ExperienceFomrActions.UPDATE_STARTED });
      await EmploymentHistoryService.update(id, values);
      dispatch({ type: ExperienceFomrActions.UPDATE_SUCCESS });
      getHistory().push("/experience");
    } catch (error) {
      dispatch({ type: ExperienceFomrActions.UPDATE_ERROR });
    }
  },

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({ type: ExperienceFomrActions.INIT_STARTED });
      let record = {};
      const isEdit = Boolean(id);
      if (isEdit) {
        record = await EmploymentHistoryService.find(id);
      }
      dispatch({ type: ExperienceFomrActions.INIT_SUCCESS, payload: record });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: ExperienceFomrActions.INIT_ERROR });
      getHistory().push("/experience");
    }
  },
};

export default ExperienceFomrActions;
