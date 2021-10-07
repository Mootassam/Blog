import Message from "../../view/shared/messages";
import Errors from "../shared/error/errors";
import AuthService from "./authService";

const prefix = "PROFILE_FORM";
const authActions = {
  UPDATED_STARTED: `${prefix}_UPDATED_STARTED`,
  UPDATED_SUCCESS: `${prefix}_UPDATED_SUCCESS`,
  UPDATED_ERROR: `${prefix}_UPDATED_ERROR`,

  updateProfile: (values) => async (disptach) => {
    try {
      disptach({ type: authActions.UPDATED_STARTED });
      await AuthService.updateProfile(values);
      disptach({ type: authActions.UPDATED_SUCCESS });
      Message.success(" Profile updated with success");
    } catch (error) {
      Errors.handle(error);
      disptach({ type: authActions.UPDATED_ERROR });
    }
  },
};
export default authActions;
