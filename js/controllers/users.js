(function() {
    //controller that get's json data
    searchApp.controller('usersController', usersController);
    
    function usersController($scope, $http) {
        var url = 'http://jsonplaceholder.typicode.com/posts?callback=JSON_CALLBACK';
        $http.jsonp(url)
            .success(function(data){
                $scope.posts = data;
               console.log('data)', data[0]); 
        });
    }
})();