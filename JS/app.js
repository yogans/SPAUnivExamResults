// app "One University Exam Results" declaration

var univExamResults=angular.module('univExamResults',[]);

// Home page controller definition

univExamResults.controller('HomePageCtrl', function HomePageCtrl($scope) {
  $scope.menuItems=[
    "Home",
    "View Result",
    "About Us",
    "Contact"
    ];
});


