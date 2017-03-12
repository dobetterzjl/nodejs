var fs = require("fs");
var readline= require("line-reader");
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'zjl',              
  password : '',       
  // port: '3306',                   
  database: 'test', 
}); 
connection.connect();
readline.eachLine('input.txt',function(line){
	var lineArr = line.split(",");
	var addsql = 'INSERT INTO message(year_month_day,temp) VALUES('+lineArr[0]+lineArr[1]+lineArr[2]+','+lineArr[3]+')';;
	connection.query(addsql,function (err,result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
})
});
// connection.end();