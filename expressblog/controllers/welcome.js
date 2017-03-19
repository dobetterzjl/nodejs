/**
 * Created by acer on 2017/3/18.
 */
var userModel = require('../models/userModel');
exports.index =function(req, res, next) {
    res.render('index', {
        title: 'Express111' ,
        message:"good",
        friends:[
            {name:"lisi",age:12},
            {name:"bkn",age:23}
        ]
    });
};
exports.ajax = function(req,res,next){
    var name= req.query.name;
    var age = req.query.age;
    res.render('news',{
        title:"1111",
        name:name,
        age:age
    });
};
exports.login = function(req,res){
    res.render('login');
};
exports.regist= function(req,res){
  res.render('regist');
};
exports.doRegist=function(req,res){
    var name = req.body.username;
    var pass = req.body.password;
    var sex = req.body.sex;
    userModel.regist(name,pass,sex,function(rs){
        if(rs.affectedRows>0){
            res.redirect('/login');
        }
    });

};
exports.welcom = function(req,res){
    var name= req.body.username;
    var pass = req.body.password;
    userModel.getByNamePwd(name,pass,function(result){
        if(result.length>0){
            res.render('welcome',{
                name:name
            });
        }
    });
};
