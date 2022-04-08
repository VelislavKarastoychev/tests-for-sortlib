"use strict";
import message from "@euriklis/message";

function success_message(text) {
    return new message()
        .bold()
        .italic()
        .set_color_green()
        .append_check_mark()
        .append_white_space()
        .reset()
        .set_color_blue()
        .append(`The ${text} was tested successfully.`)
        .reset()
        .log();
}
export default success_message;