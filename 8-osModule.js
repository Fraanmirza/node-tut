const os = require("os");

console.log(os.type());

//Info about current user
const user = os.userInfo();
console.log(user);

const currentOS = {
  name: os.type(),
  totalMemory: os.totalmem(),
  releas: os.release(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
