var connection = require('./db');
exports.getByNamePwd = function(name,passw,callback){
    connection.connect();
    var sql = "select * from t_user where username=? and password=?";
    connection.query(sql,[name,passw],function(err,result){
       if(err) throw err;
        callback(result);
        //console.log(result);
    });
    connection.end();
};
exports.regist=function(name,pass,sex,callback){
    connection.connect();
    var sql = "insert into t_user(username,password,sex) values(?,?,?)";
    connection.query(sql,[name,pass,sex],function(err,result){
        if(err) throw err;
        callback(result);
        //console.log(result);
    });
    connection.end();
};