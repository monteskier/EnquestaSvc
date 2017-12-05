var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

function login(req){//Reviso que haya una session activada , cada ruta lo comprueva, antes de comenzar el codigo.
  if(req.session.session===true){
    return true;
  }else return false;
}

router.get('/', function(req, res, next){
  res.render('admin/index', {title: 'Benvingut a la pagina administrador'});
});

router.get('/llista', function(req, res, next){
  if(login(req)){
    var db = req.db;
    var collection = db.get("resultats");

    collection.findOne({},{}, function(err, docs){
      if(err || docs.length===0){
        res.json({"msg":"sense dades"})  ;
      }else{
        console.log(docs);
        res.send(docs);
      }
    });
  }
});

router.post('/login', function(req, res, next){
  var name = req.param("name");
  var password = req.param("password");
  var db = req.db;
  var collection = db.get("users");

  collection.find({"user":name, "password":password}, function(err, docs){
    if(err || docs.length===0){
      res.json({"msg":"Usuari o contrasenya incorrectes","login":false});
    }

    console.log(docs[0].user);
    req.session.user = docs[0].user;
    req.session.session = true;
    res.json({"msg":"Benvingut/da "+ req.session.user, "session":true, "login":true});
  });
});
router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.json({"msg":"S'ha tencat la sessió correctament.", "session":false});
});

module.exports = router;
