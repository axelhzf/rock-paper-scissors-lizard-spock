app.factory("socket", function ($location) {
  var socket = io();

  socket.bindToScope = function ($scope) {
    socket.on("set", function (obj) {
      _.each(obj, function (value, key) {
        $scope[key] = value;
        if (key === "state") {
          var path = value.replace(/:/, "/");
          $location.path(path).replace();
        }
      });
      $scope.$apply();
    });
  };

  return socket;
});