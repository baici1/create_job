const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function relativeTime(date, value) {
  return dayjs(date).format(value);
}
