const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/writeFileSync-result.txt",
  `here is the result : ${first} , ${second}`,
  { flag: "a" }
);
console.log("done");
console.log("Starting next task.");
/** NOTE:   flag: 'a' --> this is used to append the text given in the method ,otherwise
 * everything will be overridden.
 */
