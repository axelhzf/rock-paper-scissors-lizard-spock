angular.module("app").controller("WinnerController", function ($scope, socket) {
  $scope.newTournament = function () {
    socket.emit("tournament:newTournament");
  }
});