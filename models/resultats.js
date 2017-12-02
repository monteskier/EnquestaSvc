function Resultats(){
}
Resultats.prototype.reset = function() {

  this.vegades = 0;
  this.pregunta1 = {};
  this.pregunta2 = {};
  this.pregunta3 = {};
  this.pregunta4 = {};
  this.pregunta5 = {};
  this.pregunta6 = {};
  this.pregunta7 = [];


  this.pregunta1.desc = "Coneix la iniciativa de conseció de la Medalla de Sant Vicenç?";
  this.pregunta2.desc = "Ha participat presentant candidats o bé votant per un d'ells?";
  this.pregunta3.desc = "Coneix qui va ser el guanyador/a de l'edició de 2016?";
  this.pregunta4.desc = "I el guanyador/a de edició actual, de 2017?";
  this.pregunta5.desc = "Voldria participar activament en la Comissió creada a l'efcte:";
  this.pregunta6.desc = "Creu que és una iniciativa que pot aportar valor a la història del municipi?";
  this.pregunta7.desc = "observacions/suggeriments";
};

//Pregunta 1 getter/setter

Resultats.prototype.getVotsP1 = function(){
  var result = {};
  result.si = this.pregunta1.si;
  result.no = this.pregunta1.no;
  return result;
}
Resultats.prototype.setVotsP1 = function (result) {
  if(resilt.op1 == "Si"){
    this.pregunta1.si = this.pregunta1.si + 1;
  }else if (result.op1=="No"){
    this.pregunta1.no = this.pregunta1.no + 1;
  }
}

//Pregunta 2 getter/setter

Resultats.prototype.getVotsP2 = function(){
  var result = {};
  result.si = this.pregunta2.si;
  result.no = this.pregunta2.no;
  return result;
}
Resultats.prototype.setVotsP2 = function (result) {
  if(resilt.op2 == "Si"){
    this.pregunta2.si = this.pregunta2.si + 1;
  }else if (result.op2=="No"){
    this.pregunta2.no = this.pregunta2.no + 1;
  }
}

//Pregunta 3 getter/setter

Resultats.prototype.getVotsP3 = function(){
  var result = {};
  result.si = this.pregunta3.si;
  result.no = this.pregunta3.no;
  return result;
}
Resultats.prototype.setVotsP3 = function (result) {
  if(resilt.op3 == "Si"){
    this.pregunta3.si = this.pregunta3.si + 1;
  }else if (result.op3=="No"){
    this.pregunta3.no = this.pregunta3.no + 1;
  }
}

//Pregunta 4 getter/setter

Resultats.prototype.getVotsP4 = function(){
  var result = {};
  result.si = this.pregunta4.si;
  result.no = this.pregunta4.no;
  return result;
}
Resultats.prototype.setVotsP4 = function (result) {
  if(resilt.op4 == "Si"){
    this.pregunta4.si = this.pregunta4.si + 1;
  }else if (result.op4=="No"){
    this.pregunta4.no = this.pregunta4.no + 1;
  }
}
//Pregunta 5 getter/setter

Resultats.prototype.getVotsP5 = function(){
  var result = {};
  result.si = this.pregunta5.si;
  result.no = this.pregunta5.no;
  return result;
}
Resultats.prototype.setVotsP5 = function (result) {
  if(resilt.op5 == "Si"){
    this.pregunta5.si = this.pregunta5.si + 1;
  }else if (result.op5=="No"){
    this.pregunta5.no = this.pregunta5.no + 1;
  }
}

//Pregunta 6 getter/setter

Resultats.prototype.getVotsP6 = function(){
  var result = {};
  result.si = this.pregunta6.si;
  result.no = this.pregunta6.no;
  return result;
}
Resultats.prototype.setVotsP6 = function (result) {
  if(resilt.op6 == "Si"){
    this.pregunta6.si = this.pregunta6.si + 1;
  }else if (result.op6=="No"){
    this.pregunta6.no = this.pregunta6.no + 1;
  }
}
//Pregunta 7 getter/setter

Resultats.prototype.getComentaris = function () {
  return this.pregunta7.comentaris;
};
Resultats.prototype.setComentaris = function(comentaris){
  this.pregunta7.comentaris.push = comentaris;
}

module.exports = Resultats;
