PeopleController = function($scope) {
  $scope.numPeople = 100;
  $scope.people = [];

  $scope.renderPeople = function() {
    var numPeople = $scope.numPeople;
    var people = new Array(numPeople);

    for (var i=0; i < numPeople; i++) {
      people[i] = { name: 'Kanye West' };
    }
    $scope.people = people;
  };
}
