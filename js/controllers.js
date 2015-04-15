(function(){

	var homeController = function ($scope, $http, $firebaseArray){
        var ref = new Firebase("https://ang-boot-fire.firebaseio.com/");
        $scope.chats = $firebaseArray(ref); 
        console.log($scope.chats);
        
        $scope.newChat = function(){
            $scope.chitter.createDate = new Date().toGMTString();
            $scope.chats.$add($scope.chitter);
            $scope.chitter.text = "";
            
        };
    };
    homeController.$inject = ['$scope', '$http', '$firebaseArray'];
    app.controller('homeController', homeController); 
    

}());