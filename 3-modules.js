// modules
/**
 *  - node use commonJS under the hood fr modules functionality
 *  - Every file is module (by default)
 *  - modules are encapsulated code (we share minimum or whatever we want )
 */
const names = require("./4-names");
const func = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-graned"); //comment this line to execute below code.
//console.log(require);
console.log(data);
func(names.john);
func(names.peter);
