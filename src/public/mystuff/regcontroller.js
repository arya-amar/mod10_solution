
(function() { //iife 

angular.
  module('public').     
    controller("regController", ['$scope','$state','$stateParams','MenuService', function ($scope,$state, $stateParams,MenuService) {
    //controller('regController', function($scope, $state, $stateParams,MenuService) {
    //controller('regController', function($scope) {
    //controller: function catController($scope,$state,MenuDataService,) {
        console.log("got to regController");

         
  }]);


}());//end iife

/*

(function () {


angular.module('public')
.controller('regController', regController);

regController.$inject = ['regItems'];
function regController(regItems) {
  var $ctrl = this;
  $ctrl.regItems = regItems;
}

})();

*/
