const path = require("path");

// separator (not a function its a property) gives-> (platform specific separator)
console.log(path.sep);

const filePth = path.join("/content/", "subfolder", "test.txt");
// even though we provided '/'forword slash in opt we got normalise path with-
// -platform specific separator which in our case is '\' backword
console.log("normalise file path: ", filePth);

const base = path.basename(filePth);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
