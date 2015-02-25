'use strict';

angular.module('tank.profile',[])
  
.controller('ProfileController', function($scope, $http, User, $stateParams, $rootScope, $cookieStore, $window){
  $scope.user = $cookieStore.get('key').google;
  $scope.player = $cookieStore.get('key').player;
  $scope.tank = $cookieStore.get('key').tank;

  $window.localStorage.setItem('com.tankerooski.id', $cookieStore.get('key')._id)

  $http.get('./api/users').
      $scope.players = data;
      $scope.sortBy = 'player.kills'
    }).
    error(function(data) {
      console.log('error', data)
    });




});