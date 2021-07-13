const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function relativeTime(date, value) {
  console.log(
    "%c 🍮 dayjs(date, value): ",
    "font-size:20px;background-color: #7F2B82;color:#fff;",
    dayjs(date, value)
  );
  return dayjs(date).format(value);
}
