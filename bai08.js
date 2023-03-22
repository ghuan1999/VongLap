"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var m = Number((0, readline_sync_1.question)("m = "));
var n = Number((0, readline_sync_1.question)("n = "));
for (var i = m; i <= n; i++) {
    var conf = 0;
    var j = 0;
    for (j = 1; j <= Math.ceil(i / 2); j++) {
        if (Math.pow(j, 2) == i) {
            console.log(i);
            conf = 1;
            break;
        }
    }
    if (conf == 1)
        break;
}
