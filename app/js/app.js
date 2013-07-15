'use strict';
//var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);
var myApp = angular.module('myApp', []);

// Declare app level module which depends on filters, and services
myApp.config(['$routeProvider', function($routeProvider) {    
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: 'ServicesController'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
    $routeProvider.otherwise({redirectTo: '/home'});    
  }]);
  
  // myApp.config(['$routeProvider', function($routeProvider) {    
  //   $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: SimpleController});
  //   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: Page2Controller});
  //   $routeProvider.otherwise({redirectTo: '/view1'});
  // }]);
  
// function Page(){
//    var title = 'default';
//    return {
//      title: function() { return title; },
//      setTitle: function(newTitle) { title = newTitle }
//    };
// };  
  
// function AppController($scope, Page){
//         $scope.Page = Page;        
//     };

// function SimpleController($scope, SimpleService, Page){        
//         $scope.customers = SimpleService.getCustomers();
//         $scope.testname = "Craig";
//         Page.setTitle("Home");
// };

// function Page2Controller($scope, Page){                        
//         Page.setTitle("Page 2");
// };  
