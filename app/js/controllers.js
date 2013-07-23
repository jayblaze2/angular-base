'use strict';

/* Controllers */
myApp.controller('AppController', function($scope, MenuService, PageService){
        $scope.menuItems = MenuService.getMenuItems();        
        PageService.setTitle("home");
        $scope.PageService = PageService;                    
    });

myApp.controller('HomeController', function($scope, PageService){                
        PageService.setTitle("Home");
        // $scope.SimplePage = SimplePage;    
});

myApp.controller('ServicesController', function($scope, PageService){            
        PageService.setTitle("Services");        
});

myApp.controller('ContactController', function($scope, PageService, ContactService){            
        PageService.setTitle("Contact");            
        $scope.contacts = ContactService.getContacts();
        
});
  
myApp.controller('RevealController', function($scope){
   $scope.revealTitle = "Title";
   // $scope.revealMessages = [
   //      {
   //          msg: "Message 1",
   //          msg: "Message 2",
   //          msg: "Message 3",
   //          msg: "Message 4"
   //      }
   //  ];
});
  