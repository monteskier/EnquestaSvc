var angularApp = angular.module('EnquestaSvc', ['ui.bootstrap','ngRoute']);
angularApp.controller('MainDefaultController', function($scope, $location, $rootScope, $http){
  'use strict';
  $scope.enviar = function(){
    console.log($scope.formData);
    $http({
      method: "POST",
      url: "/enviar",
      data: $scope.formData
    }).then(function(response){
      console.log(response.data.msg);
      alert(response.data.msg);
    })
  };
});
