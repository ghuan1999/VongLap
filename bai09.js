"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var w = Number((0, readline_sync_1.question)("Moi nhap w: "));
var h = Number((0, readline_sync_1.question)("Moi nhap h: "));
for (var i = 1; i <= h; i++) {
    var s = "";
    if (i == 1 || i == h) {
        for (var j = 1; j <= w; j++) {
            s += "* ";
        }
    }
    else {
        for (var j = 1; j <= w; j++) {
            if (j == 1 || j == w) {
                s += "* ";
            }
            else
                s += "  ";
        }
    }
    console.log(s);
}
