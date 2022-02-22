"use strict";
// run the current versions of the euriklis packages.
import validator from '@euriklis/validator';
import message from '@euriklis/message';
import SortLib from '@euriklis/sortlib';
import tests from './Tests/index.js';
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
tests();