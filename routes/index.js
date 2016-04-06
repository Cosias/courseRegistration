var express = require('express');
var router = express.Router();
var majReq = require('../data/majReq.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Course Registration' });
});


router.post('/',function(req,res){
	var formData = req.body;
	var major = formData.major;

	majReq.getReqs(major,function(err,majorResult){
		console.log(majorResult);
	});

});

module.exports = router;
