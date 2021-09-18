import Message from "../../../view/shared/messages";
import { getHistory } from "../../store";
function selectErrorKeyOrMessage(error) {
  if (error && error.response && error.response.data) {
    const data = error.response.data;
    if (data.error && data.error.message) {
      return data.error.message;
    }
    return String(data);
  }
  return error.message;
}

function selectErrorMessage(error) {
  const key = selectErrorCode(error);
  return key;
}
function selectErrorCode(error) {
  if (error && error.response && error.response.status) {
    return error.response.status;
  }
}

export default class Errors {
  static handle(error) {
    if (selectErrorCode(error) === 401) {
    }
    if (selectErrorCode(error) === 403) {
      getHistory().push("/403");
      return;
    }
    if ([400, 429].includes(selectErrorCode(error))) {
      Message.error(selectErrorMessage(error));
    }
    getHistory().push("/500");
  }
  static showMessage(error) {
    Message.error(selectErrorMessage(error));
  }
}
