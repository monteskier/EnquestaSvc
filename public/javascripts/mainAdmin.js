var angularApp = angular.module('SvcEnquesta', ['ui.bootstrap','ngRoute']);
angularApp.controller('MainAdminController', function($scope, $location, $rootScope){
  'use strict';

  $scope.initApp = function(){
    $rootScope.flag = false;
    $rootScope.session = false;
    $rootScope.login = "login";
    $location.path('login');
    setTimeout(function(){
      $rootScope.flag = false;
      $rootScope.printFlag = false;
    },3000);
  };



}).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
  'use strict';
  $locationProvider.html5Mode('true');

  $routeProvider.when('/seleccio',{
    templateUrl:"templates/admin/seleccio.html",
    controller:"SeleccioController"
  });

  $routeProvider.when('/llista',{
    templateUrl:"templates/admin/llista.html",
    controller:"LlistaController"
  });
  $routeProvider.when('/login',{
    templateUrl:"templates/admin/login.html",
    controller:"LoginController"
  });

}]);
