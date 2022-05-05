(function() { //iife 

angular.
  module('public').     
    //controller('aboutController', function($scope, $state, MenuService) {
    controller("aboutController", ['$scope','$state','$stateParams','MenuService', function ($scope,$state, $stateParams,MenuService) {
    //controller: function catController($scope,$state,MenuDataService,) {
      $scope.info=MenuService.getRegistration();
      $scope.pref=MenuService.getPref();
      //console.log("pref="+$scope.pref);
      $scope.prefurl=MenuService.getprefurl();
      //console.log($scope.preflet);
      $scope.myinfo=MenuService.isInfo();
      //console.log("in aboutController");
     // console.log(this.info);
      //console.log("pref in aboutController");
      //console.log($scope.pref);
    

  }]);


}());//end iife