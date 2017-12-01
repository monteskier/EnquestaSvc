var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/enviar', function(req, res, next){
  var db = req.db;
  var collection = db.get('resultats');

  console.log(req.body);

  collection.insert(req.body, function(e, docs){
    if(e){
      res.json({"msg":e});
    }else{
      res.json({"msg":"Gràcies per participar"});
    }
  });
});
module.exports = router;
