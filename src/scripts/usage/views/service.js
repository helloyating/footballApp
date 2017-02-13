angular.module("myApp")
.service("getData",function($http){
        return $http.get("livelist.json");
    })