myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  //bring in the DataFactory as a depedency!
  console.log('People Controller');
  $scope.message = 'People!';
  $scope.formName = '';
  $scope.dataFactory = DataFactory;
  //this enables peopleController access to DataFactory
  $scope.recent = $scope.dataFactory.recentPerson;
  //this enables access to the recentPerson object
  $scope.people = $scope.dataFactory.peopleArray;
  // peopleArray = people[] array private variable
  $scope.personCount = $scope.dataFactory.count;
  //scoping the dataFactorys methods so they are accessiable on the client/html angular

  $scope.addPerson = function() {
    $scope.dataFactory.addPerson($scope.formName);
    //pulls in the function from the factory but doesn't actually call it
    console.log("this is the scopeFormName/function",$scope.formName);
    $scope.formName = '';
    //resets the formName 
    $scope.personCount = $scope.dataFactory.addOne();
    //manually increments the counter on the dataFactory to keep up with the count

  }

}]);
