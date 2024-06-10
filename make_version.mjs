import { createRequire } from "node:module";
// Import the package.json file to get the version number by using the createRequire function
const require = createRequire(import.meta.url);
const { version } = require("./package.json");

const now = new Date();
const MM = `${now.getMonth() + 1}`.padStart(2, "0");
const DD = `${now.getDate()}`.padStart(2, "0");
const hh = `${now.getHours()}`.padStart(2, "0");
const mm = `${now.getMinutes()}`.padStart(2, "0");
const nowString = `${now.getFullYear()}-${MM}-${DD} ${hh}:${mm}`;

console.log(`export const PACKAGE_VERSION = "${version}";`);
console.error("package.json version:", version);
console.log(`export const BUILT = "${nowString}";`);
// console.error("Timestamp:", nowString);
