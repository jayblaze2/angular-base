'use strict';

/* Directives */


//angular.module('myApp.directives', []).
myApp.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  
myApp.directive('reveal', function(){
   return {
        restrict: "E",
        template: "".concat(
                '<div class="row">'                
                ,'<a href="#" data-reveal-id="myModal">Click Me For A Modal</a><div id="myModal" class="reveal-modal">'
                ,'<div class="large-12 columns">'
                ,'<h2>'
                ,'Awesome. I have it.'
                ,'</h2>'
                ,'<p class="lead">'
                ,'Your couch.  It is mine.'
                ,'</p>'
                ,'<p>'
                ,'Im a cool paragraph that lives inside of an even cooler modal. Wins'
                ,'</p>'
                ,'<a class="close-reveal-modal">&#215;</a>'
                ,'</div> <!-- end column --->'
                ,'</div> <!-- end row --->')
   }
});  

myApp.directive('directivecontroller', function() {
    return function (scope, element, attrs){
        element.bind("mouseover");
    }
})