var express = require('express');
var router = express.Router();
var ResultatsObj = require("../models/resultats.js");
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/enviar', function(req, res, next){
  var db = req.db;
  var collection = db.get('resultats');

  collection.findOne({},{},function(e, docs){
    if(docs){
      console.log("Hi han dades desades");
      next(actualitzar(req, res, next));
      res.json({"msg":"Gràcies per participar"});
    }else{
      console.log("No Hi han dades desades");
      var post = (req.body);
      console.log("el post te:"+post.op1);
      var Resultats = new ResultatsObj();
      Resultats.reset();
      Resultats.addVegades();
      Resultats.setVotsP1(post.op1, 0);
      Resultats.setVotsP2(post.op2, 0);
      Resultats.setVotsP3(post.op3, 0);
      Resultats.setVotsP4(post.op4, 0);
      Resultats.setVotsP5(post.op5, 0);
      Resultats.setVotsP6(parseInt(post.op6, 0));
      Resultats.setVotsP7(parseInt(post.op7, 0));
      Resultats.setComentaris(post.op8, 0);

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
function actualitzar(req, res, next){

  var db = req.db;
  var collection = db.get('resultats');
  var post = req.body;


  collection.findOne({},{}, function(e, docs, next){
    var objectId = new ObjectID(docs._id);
    console.log("DADES DE DOCS"+docs.pregunta1.desc);
    var Resultats = new ResultatsObj();
    Resultats.reset();
    Resultats.addVegades();
    Resultats.setVotsP1(post.op1, docs.pregunta1); //sha de pasar el antic valor i sumar-ho abans de incrementar
    Resultats.setVotsP2(post.op2, docs.pregunta2);
    Resultats.setVotsP3(post.op3, docs.pregunta3);
    Resultats.setVotsP4(post.op4, docs.pregunta4);
    Resultats.setVotsP5(post.op5, docs.pregunta5);
    Resultats.setVotsP6(parseInt(post.op6),parseInt(docs.pregunta6.valor));
    Resultats.setVotsP7(parseInt(post.op7), parseInt(docs.pregunta7.valor));
    Resultats.setComentaris(post.op8, docs.pregunta8);

    collection.update({"_id": objectId},Resultats, function(e, docssub){
      if(e){
        res.json({"msg":e});
      }else{
        res.json({"msg":"Gràcies per participar"});
      }
    });
  });
}

module.exports = router;
