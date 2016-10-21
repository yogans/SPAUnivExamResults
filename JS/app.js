// app "One University Exam Results" declaration

var univExamResults=angular.module('univExamResults',['ngRoute']);


// ngRoute configuration

univExamResults.config(function($routeProvider) {
  $routeProvider
  
  .when('/',{
    templateUrl : 'Pages/Home.html'
  })
  
  .when('/Results',{
    templateUrl : 'Pages/Results.html',
    controller : 'ResultsCtrl'
  })
  
  .when('/About',{
    templateUrl : 'Pages/About.html',
  })
  
  .otherwise('/',{
    templateUrl : 'Pages/Home.html'
  })
  
});

//menulist directive definition

univExamResults.directive('menulist',function(){
  
  var directive = {};
  
  directive.restrict = 'E';
  
  directive.template = '<ul class="nav navbar-nav"><li ng-repeat="menuItem in menuItems"><a href="#{{ menuItem}}"> {{ menuItem }} </a><li></ul>';

  return directive;
  
});


// Home page controller definition

univExamResults.controller('HomePageCtrl', function HomePageCtrl($scope) {
  $scope.menuItems=[
    "Home",
    "Results",
    "About"
    ];
});

