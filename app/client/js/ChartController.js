angular.module("app").controller("ChartController", function ($scope, socket) {
  $scope.nextMatch = function () {
    socket.emit("tournament:nextMatch");
  };
});