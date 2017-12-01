var angularApp = angular.module('EnquestaSvc', ['ui.bootstrap','ngRoute']);
angularApp.controller('MainDefaultController', function($scope, $location, $rootScope){
  'use strict';
  $scope.enviar = function($scope){
    console.log($scope.formData);
  };
});
