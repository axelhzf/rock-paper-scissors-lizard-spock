angular.module("app").controller("NameController", function ($scope, storage, socket) {
  storage.bind($scope, "name");

  if ($scope.name) {
    socket.emit("user:add", $scope.name);
  }

  $scope.sendName = function () {
    socket.emit("user:add", $scope.name);
  };
});