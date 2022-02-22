"use strict";
import message from "@euriklis/message";
export default (err_message) => {
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
