var express = require('express');
var router = express.Router();
var ResultatsObj = require("../models/resultats.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/enviar', function(req, res, next){
  var db = req.db;
  var collection = db.get('resultats');

  console.log(req.body);
  collection.findOne({},{},function(e, docs){
    if(docs){
      console.log("Hi han dades desades");
      return true;
    }else{
      console.log("No Hi han dades desades");

      var Resultats = new ResultatsObj();
      Resultats.reset();
      collection.insert(Resultats, function(e, docs){
        if(e){
          res.json({"msg":e});
        }else{
          res.json({"msg":"Gràcies per participar"});
        }
      });

    }
  });
  /*
  collection.insert(req.body, function(e, docs){
    if(e){
      res.json({"msg":e});
    }else{
      res.json({"msg":"Gràcies per participar"});
    }
  });*/
});

module.exports = router;
