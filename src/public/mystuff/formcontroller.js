(function() { //iife 

angular.
  module('public').     
    
    controller("formcontroller", ['$scope','$state','$stateParams','MenuService', function ($scope,$state, $stateParams,MenuService) {
    //controller("formcontroller", function ($scope,MenuService) {
        $scope.message={msg:""};
        $scope.menumessage={msg:""};
        $scope.reguser = {};
        $scope.userpref={};  //dictionary of menu item that user prefers
        $scope.allmenuitems=[];
        $scope.validmenuitem=true;
 
          //info from menuitems that match their menupref
        //MenuService.getAllItems2();
        $scope.allmenuitems2=MenuService.getAllItems2();
        //console.log("allmenuitems2  in form congtroller");
        //console.log($scope.allmenuitems2);
        $scope.myinforeg=MenuService.isInfo();
 
        $scope.validmenu=function(menuitem){
    
            $scope.validmenuitem=true;
            for(var i=0; i<$scope.allmenuitems2.length; i++) {
                anitem=$scope.allmenuitems2[i];
                console.log("anitem");
                console.log(anitem);
                if(anitem.short_name==menuitem){  
                    $scope.validmenuitem=true;
                    break;
                }else{
                    $scope.validmenuitem=false;
                }


            }
             console.log(menuitem);
             console.log($scope.validmenuitem);
        }

 

        $scope.Submit = function (user) {
            console.log(user);
            registered=MenuService.getRegistration();
            if (Object.keys(registered).length > 0){
                $scope.message["msg"]="You are already registered";
                return;
            }

            console.log("got to form submit");
            $scope.reguser = angular.copy(user);
            for(var i=0; i<$scope.allmenuitems2.length; i++) {
                anitem=$scope.allmenuitems2[i];
                //console.log("anitem");
                //console.log(anitem);
                if(anitem.short_name==$scope.reguser.prefmenu){
                    $scope.userpref=anitem;

                }
            }
            //console.log("$scope.userpref below");
            //console.log($scope.userpref);
            if (Object.keys($scope.userpref).length === 0){  //dict that stores user pref is empty

                $scope.menumessage.msg="No Such Menu Number Exists";
            }else{
                
                MenuService.saveRegistration($scope.reguser,$scope.userpref);
                $scope.message.msg="Registration Successful, Your Preference has been Saved";
                $scope.menumessage.msg="";
            }
            

 
        };

      
    }]);


    }());//end iife