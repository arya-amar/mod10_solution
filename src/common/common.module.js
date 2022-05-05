(function() {
"use strict";

angular.module('common', [])
//.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
//my heroku path that I generated below see if it works
.constant('ApiPath', 'https://aryaamarjit.herokuapp.com')  //may have to change to https on git
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
