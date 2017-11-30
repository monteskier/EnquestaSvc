var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function(req, res, next){
  res.render('index', {title: 'Benvingut a la pagina administrador'});
});

router.post('/login', function(req, res, next){
  var name = req.param("name");
  var password = req.param("password");
  var db = req.db;
  var collection = db.get("user");

  collection.find({"user":name, "password":password}, function(err, docs){
    if(err || docs.length==0){
      res.json({"msg":"Usuari o contrasenya incorrectes","login":false});
    }

    console.log(docs[0].user);
    req.session.user = docs[0].user;
    req.session.session = true;
    res.json({"msg":"Benvingut/da "+ req.session.user, "session":true, "login":true});
  });
});
