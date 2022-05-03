(function () { //iife
angular.

  module('public').

  component('myinfo', {  // This name is what AngularJS uses to match to the `founditems` element.
    template:  '<table ><tr><td>LastName </td><td> {{$ctrl.info.lastname}}</td></tr' +
            
        '</table>',
        styleUrls: ['./css/style.css'],

    controller: 'aboutController'

  
 

  });

})();//end iife