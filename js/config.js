(function() {
    //Configure routes 
    searchApp.config(config);
    
    function config($routeProvider) {
        $routeProvider
            .when('/thanks', {
                templateUrl: 'thanks.html',
                controller: 'thanksController',
            }).
            otherwise({
                redirectTo: '/'
            });
    }
    
    //Controllers for routes
    searchApp.controller('thanksController', thanksController);

    function thanksController() {
        this.message = "Thanks for viewing";
    }

})();