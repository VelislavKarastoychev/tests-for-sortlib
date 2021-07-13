"use strict";
// run the current versions of the euriklis packages.
const validator = require("@euriklis/validator");
const message = require("@euriklis/message");
const SortLib = require("@euriklis/sortlib");
const tests = require('./Tests');
new message()
  .set_color_yellow().bold().italic().underline()
  .append(`This library tests the @euriklis/sortlib package.\n`)
  .append(
    `The current versions of the @euriklis/sortlib is ${SortLib.version}, \n`
  )
  .append(
    `the current version of the @euriklis/validator is ${validator.version}\n`
  )
  .append(
    `and finally the current version of the @euriklis/message is ${message.version.version}`
  ).reset().log();
tests()