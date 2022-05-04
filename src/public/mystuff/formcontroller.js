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
          //info from menuitems that match their menupref
        //MenuService.getAllItems2();
        $scope.allmenuitems2=MenuService.getAllItems2();
        console.log("allmenuitems2  in form congtroller");
        console.log($scope.allmenuitems2);
        $scope.isNotValidItem=function(item){
            console.log("got to isnotvaliditem");
            //item=short_name
            for(var i=0; i<$scope.allmenuitems2.length; i++) {
                anitem=$scope.allmenuitems2[i];
                console.log("anitem");
                console.log(anitem);
                if(anitem.short_name==item){
                    console.log("isnotValid inside comparison");
                    return false;
                }else{
                    return false;
                }
            }

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
            //console.log($scope.reguser);
            //setTimeout(() => this.abandonForm());
            //$state.go('regsuccessState');
 
            //promise=MenuService.getMenuItems($scope.reguser.menupref).then(function(resp) {
            //console.log("scope.reguser.menupref="+$scope.reguser.prefmenu);
            //menuitems=MenuService.getMenuItems($scope.reguser.premenu);
            //console.log("userpref");
            //console.log(menuitems);
            /*
            promise=MenuService.getAllMenuItems().then(function(resp) {
                   return resp;
            });

            promise.then((data)=>{
                   
                   //console.log(Object.keys(data));
                   console.log("data below");
                   console.log(data);  //data is a list with one item
                   datadict=data["data"];
                   items=datadict["menu_items"];
                   $scope.allmenuitems=items;  //dictionary contains {data: [list of dictionaries of items]}
                   console.log("All Menu Items inside almenuitemsfunction");
                   console.log($scope.allmenuitems);
                   //service.menuitems=$scope.allmenuitems;  //remember to initialize this is service later and not here
            }, (error)=>{
                   console.log("Promise rejected with " + JSON.stringify(error));
            }); //end promise
            
      
            console.log("All Menu Items outside almenuitemsfunction");
            console.log($scope.allmenuitems);   

            
            //var result = $filter('filter')($scope.allmenuitems, function(item) { return item && item.m_id == $scope.reguser.prefmenu; });
            */
            for(var i=0; i<$scope.allmenuitems2.length; i++) {
                anitem=$scope.allmenuitems2[i];
                console.log("anitem");
                console.log(anitem);
                if(anitem.short_name==$scope.reguser.prefmenu){
                    $scope.userpref=anitem;
                }
            }
            console.log("$scope.userpref below");
            console.log($scope.userpref);
            if (Object.keys($scope.userpref).length === 0){  //empty

                $scope.menumessage.msg="No Such Menu Number Exists";
            }else{
                
                MenuService.saveRegistration($scope.reguser,$scope.userpref);
                $scope.message.msg="Registration Successful, Your Preference has been Saved";
            }
            

 
        };

      
    }]);


    }());//end iife