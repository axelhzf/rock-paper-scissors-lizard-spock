angular.module("app").controller("MatchController", function ($scope, socket) {

  function updateShowMovements () {
    $scope.showMovements =
      ($scope.activeMatch.user1.id === $scope.user.id && !$scope.activeMatch.play1) ||
        ($scope.activeMatch.user2.id === $scope.user.id && !$scope.activeMatch.play2);
  }

  function updateShowWinner () {
    $scope.showWinner = $scope.activeMatch.play1 && $scope.activeMatch.play2;
  }

  function updateImagePlay1 () {
    $scope.imagePlay1 = $scope.activeMatch.play1 ? $scope.activeMatch.play1 : "empty";
  }

  function updateImagePlay2 () {
    $scope.imagePlay2 = $scope.activeMatch.play2 ? $scope.activeMatch.play1 : "empty";
  }

  $scope.$watch("activeMatch.user1.id", updateShowMovements);
  $scope.$watch("activeMatch.user2.id", updateShowMovements);
  $scope.$watch("activeMatch.play1", updateShowMovements);
  $scope.$watch("activeMatch.play2", updateShowMovements);
  $scope.$watch("activeMatch.play1", updateShowWinner);
  $scope.$watch("activeMatch.play2", updateShowWinner);
  $scope.$watch("activeMatch.play1", updateImagePlay1);
  $scope.$watch("activeMatch.play2", updateImagePlay2);


  $scope.play = function (play) {
    if ($scope.user.id === $scope.activeMatch.user1.id) {
      $scope.activeMatch.play1 = play;
    } else if ($scope.user.id === $scope.activeMatch.user2.id) {
      $scope.activeMatch.play2 = play;
    }
    socket.emit("match:play", play);
  }
});