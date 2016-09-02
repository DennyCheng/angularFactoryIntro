myApp.controller('AddressController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Address Controller');
  $scope.message = 'Addresses!';

  $scope.people = DataFactory.peopleArray;
  //addressController is able to access the people inputed on the people controller since the information
  //is held on the dataFactory that is shared between these two controllers
  $scope.personCount = DataFactory.count();

}]);
