angular.module("app").controller("TournamentsController", function ($scope, socket) {
  $scope.tournamentMaxUsers = "2";
  $scope.createTournament = function (name, maxUsers) {
    socket.emit("tournament:add", {name: name, maxUsers: parseInt(maxUsers, 10)});
  };
  $scope.joinTournament = function (tournament) {
    socket.emit("tournament:join", tournament.id);
  }
});