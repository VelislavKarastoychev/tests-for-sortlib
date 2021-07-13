"use strict";
const message = require("@euriklis/message");
function error_message(text) {
  return new message()
    .bold()
    .italic()
    .set_color_red()
    .append_not_check_mark()
    .append_white_space()
    .reset()
    .set_color_blue()
    .append(`The method ${text} was failed because of an error.`)
    .reset()
    .log();
}
module.exports = error_message;