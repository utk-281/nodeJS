//! os --> operating system, we can get the system information
// import os from "os";
const os = require("os");

// console.log(os);

//! arch() --> it returns the architecture of the CPU
// console.log(os.arch());

//! cpus() --> returns the cores present in the system
// console.log(os.cpus().length); this will give me the number of cores present

//! totalmem() --> it gives us the Total RAM present
// console.log((os.totalmem() / (1024 * 1024 * 1024)).toFixed(2));

//! freemem() --> it gives us the free RAM present
// console.log((os.freemem() / (1024 * 1024 * 1024)).toFixed(2));

//! hostname() --> it gives us the system name
// console.log(os.hostname());

//! platform() --> returns the platform
// console.log(os.platform());
// console.log(os.constants);

// console.log(os.release());

// console.log(os.homedir());
