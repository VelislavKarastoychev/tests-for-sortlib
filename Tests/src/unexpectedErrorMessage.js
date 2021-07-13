"use strict";
const message = require("@euriklis/message");
module.exports = (err_message) => {
  const err_name = new message()
    .bold()
    .italic()
    .underline()
    .set_color_yellow()
    .append("Unexpected error in the test of @euriklis/sortlib package")
    .reset().text;
  const styled_err_message = new message()
    .bold()
    .italic()
    .underscore()
    .set_color_cyan()
    .append(err_message)
    .reset().text;
  return new message()
    .append(err_name)
    .append("\n")
    .append(styled_err_message)
    .reset()
    .log();
};
