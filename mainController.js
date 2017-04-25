angular.module('myApp').controller('mainController', function($scope, mainService) {

  $scope.getQuotes = function() {
    $scope.quotes= mainService.getQuotes();
    console.log($scope.quotes)
  };
  $scope.getQuotes();

  $scope.createQuote = function(quoteAdd) {
    mainService.createQuote(quoteAdd);
  };
  $scope.deleteQuote = function(quoteToDelete) {
    mainService.deleteQuote(quoteToDelete);
  }
})
