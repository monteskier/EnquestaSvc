angular.module('SvcEnquesta')
  .controller("LlistaController",['$rootScope','$scope','$location','$http', function($rootScope, $scope, $location, $http){
    'use strict';
    $scope.obtindreResultats = function(){
      console.log("anem a llsitar");
      $http({
        method:"GET",
        url:"admin/llista"
      }).then(function(request){
          console.log(request);
          $scope.post = request.data;
          console.log($scope.post);
      });
    };

  }]);
