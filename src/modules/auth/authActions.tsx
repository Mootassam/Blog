import Message from "../../view/shared/messages";
import Errors from "../shared/error/errors";
import { AuthToken } from "./AuhtToken";
import AuthService from "./authService";

const prefix = "AUTH";
const authActions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,
  UPDATED_STARTED: `${prefix}_UPDATED_STARTED`,
  UPDATED_SUCCESS: `${prefix}_UPDATED_SUCCESS`,
  UPDATED_ERROR: `${prefix}_UPDATED_ERROR`,
  AUTH_START: `${prefix}_AUTH_START`,
  AUTH_SUCCESS: `${prefix}_AUTH_SUCCESS`,
  AUTH_ERROR: `${prefix}_AUTH_ERROR`,
  AUTH_INIT_SUCCESS: `${prefix}_AUTH_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_AUTH_INIT_ERROR`,

  doClearErrorMessage() {
    return {
      type: authActions.ERROR_MESSAGE_CLEARED,
    };
  },

  doSiginWithEmailAndPassword:
    (email, password, rememberMe) => async (dispatch) => {
      try {
        dispatch({ type: authActions.AUTH_START });
        let currentUser = null;
        const token = await AuthService.signinWithEmailAndPassword(
          email,
          password
        );
        AuthToken.set(token, rememberMe);
        currentUser = await AuthService.fetchMe();
        dispatch({ type: authActions.AUTH_SUCCESS, payload: { currentUser } });
      } catch (error) {
        await AuthService.signout();
        if (Errors.errorCode(error) !== 400) {
          Errors.handle(error);
        }
        dispatch({
          type: authActions.AUTH_ERROR,
          payload: Errors.selectMessage(error),
        });
      }
    },
  doSiginupWithEmailAndPassword: (email, password) => async (dispatch) => {
    try {
      let currentUser = null;
      dispatch({ type: authActions.AUTH_START });
      const token = await AuthService.registerWithEmailAndPassword(
        email,
        password
      );

      AuthToken.set(token, true);
      currentUser = await AuthService.fetchMe();

      dispatch({ type: authActions.AUTH_SUCCESS, payload: { currentUser } });
    } catch (error) {
      await AuthService.signout();
      if (Errors.errorCode(error) !== 400) {
        Errors.handle(error);
      }
      dispatch({
        type: authActions.AUTH_ERROR,
        payload: Errors.selectMessage(error),
      });
    }
  },
  doSignout: () => async (dispatch) => {
    try {
      dispatch({ type: authActions.AUTH_START });
      await AuthService.signout();
      dispatch({
        type: authActions.AUTH_SUCCESS,
        payload: { currentUser: null },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: authActions.AUTH_ERROR });
    }
  },
  doRefreshCurrentUser: () => async (dispatch) => {
    try {
      dispatch({ type: authActions.AUTH_START });

      let currentUser = null;
      const token = AuthToken.get();
      if (token) {
        currentUser = await AuthService.fetchMe();
      }
      dispatch({ type: authActions.AUTH_SUCCESS, payload: { currentUser } });
    } catch (error) {
      dispatch({ type: authActions.AUTH_ERROR });
    }
  },

  doInit: () => async (dispatch) => {
    try {
      const token = AuthToken.get();
      let currentUser = null;
      if (token) {
        currentUser = await AuthService.fetchMe();
      }
      dispatch({
        type: authActions.AUTH_INIT_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      AuthService.signout();
      Errors.handle(error);
      dispatch({ type: authActions.AUTH_INIT_ERROR, payload: error });
    }
  },
  updateProfile: (values) => async (disptach) => {
    try {
      disptach({ type: authActions.UPDATED_STARTED });
      await AuthService.updateProfile(values);
      disptach({ type: authActions.UPDATED_SUCCESS });
      await disptach(authActions.doRefreshCurrentUser());
      Message.success(" Profile updated with success");
    } catch (error) {
      Errors.handle(error);
      disptach({ type: authActions.UPDATED_ERROR });
    }
  },
};
export default authActions;
