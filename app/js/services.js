'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
myApp.service('PageService', function(){    
   var title = 'default';
   
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; }
   };
});

myApp.service('ContactService', function(){
          
        var Contacts = [];
        
        //Home
        Contacts = [
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' },
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }, 
            { name: 'Contact', imgUrl: 'http://placehold.it/250x250&text=Thumbnail', position: 'Position', email: 'contact@email.com', phone: '123-123-4567' }            
        ];
          
        var service = {};
        service.getContacts = function(){
            return Contacts;
        };
        
        return service;
});

myApp.service('MenuService', function(){
          
        var menuItems = [];
        
        //Home
        menuItems = [
            { route: '#/services', name: 'Services' }, 
            { route: '#/contact', name: 'Contact' },
            { route: '#/home', name: 'Home' }
        ];
          
        var service = {};
        service.getMenuItems = function(){
            return menuItems;
        };
        
        return service;
});
  
//myApp.service('version', '0.1');
