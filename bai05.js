"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var n = Number((0, readline_sync_1.question)("Nhap so nguyen duong n: "));
var dem = 0;
for (var i = 1; i <= n; i++) {
    if (n % i == 0)
        dem++;
}
console.log(dem);
