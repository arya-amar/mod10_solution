(function () {
/*"use strict";*/

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {

  service=this;
  this.userdata={};
  this.pref={};
  this.allmenuitems2=[];

  

  service.message2={msg:""};

  service.setMessage=function(amsg){
      service.message.msg=amsg;
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.saveRegistration = function (data,pref) {
      this.userdata=data;
      this.pref=pref;
    };

    service.getRegistration = function () {
      return this.userdata;
    };

    service.getPref=function(){
        return this.pref;
    };


    service.getMenuItems = function (category) {
      //apiPath='https://ychaikin-course5.herokuapp.com'
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      //return $http.get(ApiPath + '/menu_items/'+category+'.json', config).then(function (response) {
        console.log(response.data)
        return response.data;
      });
    };


/*
    service.getAllMenuItems=function(){
      var username='aryaamarjit';
      var password='vyasa001';


          //console.log("categoryid in getItemsforCategories="+categoryid);
          //const url="https://davids-restaurant.herokuapp.com/menu_items.json";
          const url=ApiPath+"/menu_items/json";
          

          
          const promise=$http({method: 'GET',url,Accept: 'application/json'}); //http returns a promise
          console.log("promise in getItemsforCategories");
          //console.log(promise);

          return promise;

     };

*/
      service.getAllItems2=function(){
          
            const url=ApiPath+"/menu_items/json";
          
           promise=$http({method: 'GET',url, Accept: 'application/json'}); //http returns a promise
          console.log("promise in getItemsforCategories");
          //console.log(promise);

           promise.then((data)=>{
                     
                     //console.log(Object.keys(data));
                     console.log("data below");
                     console.log(data);  //data is a list with one item
                     datadict=data["data"];
                     items=datadict["menu_items"];
                     for (var i=0;i<items.length;i++){
                         this.allmenuitems2.push(items[i]);
                     }
                     console.log("All Menu Items inside of service ");
                     console.log(this.allmenuitems2);
                     //service.menuitems=$scope.allmenuitems;  //remember to initialize this is service later and not here
              }, (error)=>{
                     console.log("Promise rejected with " + JSON.stringify(error));
              }); //end promise
              

            console.log("All Menu Items inside of service but outside of promise");
            console.log(this.allmenuitems2);
            return this.allmenuitems2;

     };

    }

})();
