"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var n = Number((0, readline_sync_1.question)("n = "));
var conf = 0;
for (var i = 1; i <= Math.ceil(n / 2); i++) {
    if (Math.pow(i, 2) == n) {
        conf = 1;
        break;
    }
}
if (conf == 1)
    console.log("Yes");
else
    console.log("No");
