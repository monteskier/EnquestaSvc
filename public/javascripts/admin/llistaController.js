angular.module('SvcEnquesta')
  .controller("LlistaController",['$rootScope','$scope','$location', function($rootScope, $scope, $location){
    'use strict';
    $scope.obtindreResultats = function(){
      $http({
        method:"GET",
        url:"admin/llista"
      }).then(function(request){
          $scope.posts = request.data;
      });
    };

  }]);
