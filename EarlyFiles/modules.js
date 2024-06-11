// First method for importing
// const xyz = require("./people");
// console.log(xyz.people, xyz.ages);

// Second method for importing
const { people, ages } = require("./people");
console.log(people, ages);

// operating system
const os = require("os");
console.log(os.platform(), os.homedir());
