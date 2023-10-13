export default function FormatDate(input) {
  const [year, month, day, hour, minute, second, millisecond] = input;
  const date = new Date(year, month, day, hour, minute, second, millisecond);
  // Replace this with your JSON LocalDateTime string

  console.log(date);
}
