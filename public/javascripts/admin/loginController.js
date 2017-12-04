angular.module('SvcEnquesta')
  .controller("LoginController",['$rootScope','$scope','$location', function($rootScope, $scope, $location){
    'use strict';
    $scope.carregar = function(opcio){
      $rootScope.tipusOpcio = opcio;
      $location.path('/'+opcio);
    };

  }]);
