
//nodejs events模块:events模块只提供一个对象，即为events.EventEmitter,需要实例化 即 new events.EventEmitter();
//on 函数用于绑定事件函数，emit 属性用于触发一个事件
var events = require("events");
var eventEmitter = events.EventEmitter;
var event = new eventEmitter();
event.on('show_sth',function(){
	console.log('bkn is not a good person!!');
});
event.emit('show_sth');
// setTimeout(function(){
// 	event.emit('show_sth');
// },1000)
event.on('loop_event',function(arg1,arg2){
	console.log("is listening1 "+arg1+arg2);
})
event.on('loop_event',function(arg1,arg2){
	console.log("is listening2 "+arg1+arg2);
})
event.emit('loop_event','111','2222');
event.emit('error');
