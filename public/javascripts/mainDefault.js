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
      $scope.polssat=true;
      console.log(response.data.msg);
      alert(response.data.msg);
    });
  };
  $scope.obligatorietat = function(){
    if(parseInt($scope.formData.op6) <= 2 || parseInt($scope.formData.op7) <= 2){
        $scope.obligat = true;
    }else{
      $scope.obligat = false;
    }

  };
  $scope.demanarMail = function(){
    console.log("sexecuta el init");
    if($scope.formData.op5=="Si"){
      $scope.mail=false;
      $scope.obligatmail=true;
    }else if($scope.formData.op5!=="Si"){
      $scope.mail=true;
    }
  };
  $scope.initApp = function(){
    $scope.mail=true;
  };
});
