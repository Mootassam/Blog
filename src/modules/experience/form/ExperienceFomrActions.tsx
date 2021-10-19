import React from "react";
import EmploymentHistoryService from "src/modules/experience/employmentHistoryService";
import Message from "../../../view/shared/messages";
import Errors from "../../shared/error/errors";

const prefix = "EXPERIENCE";
const ExperienceFomrActions = {
  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  doCreate: (values) => async (disptach) => {
    try {
      disptach({ type: ExperienceFomrActions.CREATE_STARTED });
      await EmploymentHistoryService.create(values);
      disptach({ type: ExperienceFomrActions.CREATE_SUCCESS });
      Message.success("Experience added wiht sucess");
    } catch (error) {
      Errors.handle(error);
      disptach({ type: ExperienceFomrActions.CREATE_ERROR });
    }
  },
};

export default ExperienceFomrActions;
