//读入文件
var fs= require('fs');
var data='';
var readerStream= fs.createReadStream('1.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
	console.log(data);
})
readerStream.on('error', function(err){
   console.log(err.stack);
});
//写入文件
var data2="HG喜欢小帅哥时间冻结啥是多少asghasdfa";
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data2,'UTF8');
writeStream.end();
writeStream.on('finish', function() {
    console.log("写入完成。");
});
writeStream.on('error',function(){
	console.log(err.strack);
})