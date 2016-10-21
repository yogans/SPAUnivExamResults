univExamResults.controller('ResultsCtrl',function ResultCtrl($scope,$http){
  
  $scope.showResult = false;
  $scope.examResult = {};
  
  var continueIteration = true;
  var showResultTable = false;
  var examResultObj = {};
  
  $http.get("Resources/Results.json").then(function(response){
    
    resultSet=response.data;
    
  })
  
  $scope.viewResults=function(){
   
   if(typeof $scope.regNum === "undefined" || $scope.regNum === ""){
     
     alert("Enter registration number!");
     
   }
   
   else if(typeof $scope.pass === "undefined" || $scope.pass === ""){
     
     alert("Enter password!");
     
   }
   
   else{
     
     showResultTable = false;
     continueIteration = true;
     examResultObj = {};
     
     angular.forEach(resultSet.records,function(value){
       
       if(continueIteration){
         
         if(value.Registration_Number === $scope.regNum && value.Password != $scope.pass){
           
           //console.log(typeof $scope.regNum+" & "+typeof value.Registration_Number);
           continueIteration = false;
           alert("Invalid Password!... Please try again.");
           
         }
         
         else if(value.Registration_Number != $scope.regNum){
           
           //console.log(value.Registration_Number);
           //console.log(typeof $scope.regNum+" & "+typeof value.Registration_Number);
           continueIteration = false;
           alert("Invalid Registration Number!... Please try again.");
           
         }
         
         else{
           
           continueIteration = false;
           console.log(value.Marks);
           examResultObj = value.Marks;
           console.log($scope.examResult);
           showResultTable = true;
           //$scope.showResult = true;
           
         }
         
       }
       
     })
     
   }
   
   $scope.showResult = showResultTable;
   $scope.examResult = examResultObj;
    
  };
  
});