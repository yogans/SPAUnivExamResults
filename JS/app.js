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


univExamResults.controller('ResultsCtrl',function ResultCtrl($scope){
  
  $scope.showResult=false;
  
  results = ["10010","10020","10030"];

  marks = [
    {
      "English" : 60,
      "Tamil" : 78,
      "Maths" : 90,
      "Science" : 75,
      "Social" : 60
    },
    
    {
      "English" : 50,
      "Tamil" : 81,
      "Maths" : 92,
      "Science" : 53,
      "Social" : 67
    },
    
    {
      "English" : 70,
      "Tamil" : 74,
      "Maths" : 40,
      "Science" : 55,
      "Social" : 63
    },
    
  ];
  
  $scope.viewResults=function(){
   
   if(typeof $scope.regNum === "undefined" || $scope.regNum === ""){
     alert("Enter registration number!");
   }
   
   else if(typeof $scope.pass === "undefined" || $scope.pass === ""){
     alert("Enter password!");
   }
   
   else if(results.indexOf($scope.regNum) != "-1" ){
     $scope.examResult=marks[results.indexOf($scope.regNum)];
     $scope.showResult=true;
   }
   
   else
   {
     alert("Registration number not found!");
   }

  };
  
});

