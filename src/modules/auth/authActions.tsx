import Message from "../../view/shared/messages";
import Errors from "../shared/error/errors";
import { AuthToken } from "./AuhtToken";
import AuthService from "./authService";

const prefix = "AUTH";
const authActions = {
  UPDATED_STARTED: `${prefix}_UPDATED_STARTED`,
  UPDATED_SUCCESS: `${prefix}_UPDATED_SUCCESS`,
  UPDATED_ERROR: `${prefix}_UPDATED_ERROR`,
  AUTH_START: `${prefix}_AUTH_START`,
  AUTH_SUCCESS: `${prefix}_AUTH_SUCCESS`,
  AUTH_ERROR: `${prefix}_AUTH_ERROR`,

  doSiginWithEmailAndPassword: (email, password) => async (dispatch) => {
    try {
      dispatch({ type: authActions.AUTH_START });
      let curentUser = null;
      const token = await AuthService.signinWithEmailAndPassword(
        email,
        password
      );
      AuthToken.set(token, true);
      const currentUser = await AuthService.fetchMe();
      dispatch({ type: authActions.AUTH_SUCCESS, payload: { currentUser } });
    } catch (error) {}
    dispatch({ type: authActions.AUTH_ERROR });
  },
  doSiginupWithEmailAndPassword: () => async (dispatch) => {},

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
