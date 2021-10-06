import moment from "moment";
export default class Moment {
  static ShowDateTime(date) {
    return moment(date).fromNow(date);
  }
}
