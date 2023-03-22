"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var h = Number((0, readline_sync_1.question)("h = "));
for (var i = 1; i < h; i++) {
    var s_1 = "";
    for (var j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
            s_1 += "* ";
        }
        else
            s_1 += "  ";
    }
    console.log(s_1);
}
var s = "";
for (var i = 1; i <= h; i++) {
    s += "* ";
}
console.log(s);
