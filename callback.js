//阻塞
// var http = require("http");
var fs = require("fs");
var data = fs.readFileSync('1.txt');
console.log(data,toString());
console.log("end");
//非阻塞，回调函数
var fs = require('fs');
fs.readFile('1.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");