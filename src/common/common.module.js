(function() {
/*"use strict";*/

angular.module('common', [])
//.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
//my heroku path that I generated below
.constant('ApiPath', 'https://enigmatic-fortress-50268.herokuapp.com')  //may have to change to https on git
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
