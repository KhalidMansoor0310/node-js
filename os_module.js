const os = require('os');

// checking total memory of the system
console.log(os.totalmem()/(1024*1024*1024));

//checking ram free space
console.log(os.freemem()/(1024*1024*1024));

//checking cpu architecture
console.log(os.arch());

//checking hostname
console.log(os.hostname());

//checking platform
console.log(os.platform());

console.log(os.userInfo());

