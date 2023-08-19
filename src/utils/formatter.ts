import moment from "moment";
import "moment/locale/pt-br";

export function relativeDateFormatter(date: string) {
  return moment(date).fromNow();
}
