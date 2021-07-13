"use strict";
const message = require("@euriklis/message");
module.exports = (err_message) => {
  return new message()
    .bold()
    .italic()
    .set_color_green()
    .append_check_mark()
    .append_white_space()
    .underline()
    .set_color_yellow()
    .append(
      "Controlled error message for the bucket sort method of the SortLib package:\n"
    )
    .reset()
    .append(err_message)
    .reset()
    .log();
};
