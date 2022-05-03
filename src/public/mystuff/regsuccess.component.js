(function() { //iife 

angular.

  module('public').     

  component('regsuccess', {  // This name is what AngularJS uses to match to the `regsuccess` element.
    template:  '<h1> Successfully Registered</h1>',

    controller: 'regController'

    

  });

}()); //end iife