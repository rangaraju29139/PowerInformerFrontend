import moment from "moment/moment";

export default function FormatDate(input) {
  const [year, month, day, hour, minute, second, millisecond] = input;
  const date = new Date(year, month - 1, day, hour, minute, second);
  // Replace this with your JSON LocalDateTime string

  return moment(date).format("LLL");
}
