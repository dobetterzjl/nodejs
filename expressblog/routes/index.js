var express = require('express');
var router = express.Router();
var welcome = require("../controllers/welcome");
/* GET home page. */
router.get('/',welcome.index);
router.get('/bd',welcome.ajax);
router.get('/login',welcome.login);
router.post('/welcome',welcome.welcom);
router.get('/regist',welcome.regist);
router.post('/regist',welcome.doRegist);
module.exports = router;
