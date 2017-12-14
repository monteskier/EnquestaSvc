function Resultats(){

this.reset = function() {

  this.vegades = 0;
  this.pregunta1 = {};
  this.pregunta2 = {};
  this.pregunta3 = {};
  this.pregunta4 = {};
  this.pregunta5 = {};
  this.pregunta6 = {};
  this.pregunta7 = {};
  this.pregunta8 = {};

  this.pregunta1.desc = "Coneix la iniciativa de conseció de la Medalla de Sant Vicenç?";
  this.pregunta2.desc = "Ha participat presentant candidats o bé votant per un d'ells?";
  this.pregunta3.desc = "Coneix qui va ser el guanyador/a de l'edició de 2016?";
  this.pregunta4.desc = "I el guanyador/a de edició actual, de 2017?";
  this.pregunta5.desc = "Voldria participar activament en la Comissió creada a l'efcte:";
  this.pregunta6.desc = "Creu que és una iniciativa que pot aportar valor a la història del municipi?";
  this.pregunta7.desc = "Li sembla que el procés de concessió és el correcte? ";
  this.pregunta8.desc = "observacions/suggeriments";

  this.pregunta1.si = 0;
  this.pregunta1.no = 0;

  this.pregunta2.si = 0;
  this.pregunta2.no = 0;

  this.pregunta3.si = 0;
  this.pregunta3.no = 0;

  this.pregunta4.si = 0;
  this.pregunta4.no = 0;

  this.pregunta5.si = 0;
  this.pregunta5.no = 0;


  this.pregunta6.valor = 0;

  this.pregunta7.valor = 0;


  this.pregunta8.comentaris = [];
  this.mails = [];

  //Vegades Setter/getter

  this.getVegades = function () {
    return this.vegades;
  };
  this.addVegades = function(vegades){
    if(vegades!=0){
      this.vegades = this.vegades + vegades;
    }
    this.vegades++;
  }
  //Pregunta 1 getter/setter

  this.getVotsP1 = function(){
    var result = {};
    result.si = this.pregunta1.si;
    result.no = this.pregunta1.no;
    return result;
  }

  this.setVotsP1 = function (result, antic) {
    //crear condicio de si hi ha historic, poder recuperar les anterios
    //votacions dintre de un if antic != 0

    if(antic!=0){
      this.pregunta1.si = antic.si;
      this.pregunta1.no = antic.no;
    }
    if(result== "Si"){
      this.pregunta1.si = this.pregunta1.si + 1;
    }else if (result=="No"){
      this.pregunta1.no = this.pregunta1.no + 1;
    }
  }
  //Pregunta 2 getter/setter

  this.getVotsP2 = function(){
    var result = {};
    result.si = this.pregunta2.si;
    result.no = this.pregunta2.no;
    return result;
  }
  this.setVotsP2 = function (result, antic) {
    if(antic!=0){
      this.pregunta2.si = antic.si;
      this.pregunta2.no = antic.no;
    }
    if(result == "Si"){
      this.pregunta2.si = this.pregunta2.si + 1;
    }else if (result=="No"){
      this.pregunta2.no = this.pregunta2.no + 1;
    }
  }
  //Pregunta 3 getter/setter

  this.getVotsP3 = function(){
    var result = {};
    result.si = this.pregunta3.si;
    result.no = this.pregunta3.no;
    return result;
  }
  this.setVotsP3 = function (result, antic) {
    if(antic!=0){
      this.pregunta3.si = antic.si;
      this.pregunta3.no = antic.no;
    }
    if(result == "Si"){
      this.pregunta3.si = this.pregunta3.si + 1;
    }else if (result=="No"){
      this.pregunta3.no = this.pregunta3.no + 1;
    }
  }

  //Pregunta 4 getter/setter

  this.getVotsP4 = function(){
    var result = {};
    result.si = this.pregunta4.si;
    result.no = this.pregunta4.no;
    return result;
  }
  this.setVotsP4 = function (result, antic) {
    if(antic!=0){
      this.pregunta4.si = antic.si;
      this.pregunta4.no = antic.no;
    }
    if(result== "Si"){
      this.pregunta4.si = this.pregunta4.si + 1;
    }else if (result=="No"){
      this.pregunta4.no = this.pregunta4.no + 1;
    }
  }
  //Pregunta 5 getter/setter

  this.getVotsP5 = function(){
    var result = {};
    result.si = this.pregunta5.si;
    result.no = this.pregunta5.no;
    return result;
  }
  this.setVotsP5 = function (result, antic) {
    if(antic!=0){
      this.pregunta5.si = antic.si;
      this.pregunta5.no = antic.no;
    }

    if(result == "Si"){
      this.pregunta5.si = this.pregunta5.si + 1;
    }else if (result=="No"){
      this.pregunta5.no = this.pregunta5.no + 1;
    }
  }

  //Pregunta 6 getter/setter

  this.getVotsP6 = function(){
    return this.pregunta6.valor;
  }

  this.setVotsP6 = function (valor, antic) {
    if(antic!=0){
      this.pregunta6.valor = this.pregunta6.valor + antic;
    }
    this.pregunta6.valor = this.pregunta6.valor + valor
  }
  //Pregunta 7 getter/setter
  this.getVotsP7 = function(){
    return this.pregunta7.valor;
  }

  this.setVotsP7 = function (valor, antic) {
    if(antic!=0){
      this.pregunta7.valor = this.pregunta7.valor + antic;
    }
    this.pregunta7.valor = this.pregunta7.valor + valor
  }

  //Pregunta 8 getter/setter

  this.getComentaris = function () {
    return this.pregunta8.comentaris;
  };
  this.setComentaris = function(result, antic){
    if(antic!=0 && antic!==null){
      console.log(antic);
      if(antic.comentaris.length>0){
        var buffer = [];
        antic.comentaris.forEach(function(element){
          buffer.push(element);
        });
        this.pregunta8.comentaris = buffer;
      }
    }
    this.pregunta8.comentaris.push(result);
  }
  //Mails getter/setter
this.getMails = function(){
    return this.mails;
}
this.setMails = function(result, antic){
  if(antic!=0 && antic!==null){
    if(antic.length>0){
      var buffer = [];
      antic.forEach(function(element){
        buffer.push(element);
      });
      this.mails= buffer;
    }
  }
  this.mails.push(result);
  }
}
}
module.exports = Resultats;
