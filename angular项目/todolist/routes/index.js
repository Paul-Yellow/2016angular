var express = require('express');
var router = express.Router();
var todoModel=require('../model');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/todos', function(req, res, next) {
  todoModel.find({},function(err,todos){
    if(err){
      res.send(err);
    }else{
      res.send(todos);
    }
  });
});

module.exports = router;
