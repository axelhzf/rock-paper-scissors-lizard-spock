angular.module("app").controller("ChartController", function ($scope, socket) {
  $scope.newTournament = function () {
    socket.emit("tournament:newTournament");
  }
});