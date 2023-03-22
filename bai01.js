"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var n = Number((0, readline_sync_1.question)("n = "));
var s = "";
for (var i = 1; i < n; i++) {
    s += ("Kmin " + i + ", ");
}
s += ("Kmin " + n);
console.log(s);
