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
  
  