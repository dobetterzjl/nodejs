var lineReader = require('line-reader');
var fs=require("fs");

// read all lines:
// lineReader.eachLine('file.txt', function(line) {
//   console.log(line);
// }).then(function (err) {
//   if (err) throw err;
//   console.log("I'm done!!");
// });
var lineReader = require('line-reader');

lineReader.eachLine('temp.txt', function(line, last) {
		var mon=line.substr(19,2);
		// console.log(typeof mon)
		mon=mon.replace(0,'');
		var day = line.substr(21,2);
		day = day.replace(0,'');
		var tempr= line.substring(87,92);
		tempr = tempr.replace('+','');
		// if(tempr.match('/0/').length==4){
		// 	tempr=0;
		// }
		tempr = tempr.replace(/0/g,'');
		if(tempr==''){tempr=0;}
		line = line.substr(15,4)+','+mon+','+day+','+tempr+'\n';
		fs.appendFile("input.txt",line,function(err){
  		if (err) {
       		return console.error(err);
   		}
		})
});