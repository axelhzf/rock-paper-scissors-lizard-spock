var app = angular.module("app", ["angularLocalStorage"]);

var socket;

app.controller("MainController", function ($scope) {
  $scope.state = "LOADING";
  socket = io();
  socket.on("set", function (obj) {
    _.each(obj, function (value, key) {
      $scope[key] = value;
    });
    $scope.$apply();
  });

//  $scope.state = "tournament:chart";
//  $scope.tournament = {
//    name: "Torneo de la muerte",
//    maxUsers: 4,
//    users: [
//      {name: "Pepe"},
//      {name: "Juan"}
//    ],
//    brackets: [
//      [
//        [
//          {name: "Pepe", id: 1},
//          {name: "Juan", id: 2}
//        ],
//        [
//          {name: "Pepe", id: 3},
//          {name: "Juan", id: 4}
//        ]
//      ],
//      [
//        [
//          {name: "", id: -1},
//          {name: "", id: -1}
//        ]
//      ],
//      [
//        [
//          {name: ""}
//        ]
//      ]
//    ]
//  };
//
//  $scope.user = {
//    id: 1,
//    name: "Axel"
//  };
//  $scope.activeMatch = {
//    user1: {
//      id: 1, name: "Axel"
//    },
//    user2: {
//      id: 2, name: "Andrea"
//    }
////    play1: "rock",
////    play2: "spock",
////    winner: {
////      name: "Axel"
////    }
//  };
//
//  $scope.winner = "PEPE";


});

app.controller("NameController", function ($scope, storage) {
  storage.bind($scope, "name");
  if ($scope.name) {
    socket.emit("user:add", $scope.name);
  }

  $scope.sendName = function () {
    socket.emit("user:add", $scope.name);
  };
});

app.controller("MatchController", function ($scope) {

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

app.controller("TournamentsController", function ($scope) {
  $scope.tournamentMaxUsers = "2";
  $scope.createTournament = function (name, maxUsers) {
    socket.emit("tournament:add", {name: name, maxUsers: parseInt(maxUsers, 10)});
  }
  $scope.joinTournament = function (tournament) {
    socket.emit("tournament:join", tournament.id);
  }
});

app.controller("TournamentWait", function ($scope) {
});

app.controller("TournamentChart", function ($scope) {
  $scope.nextMatch = function () {
    socket.emit("tournament:nextMatch");
  }
  $scope.newTournament = function () {
    socket.emit("tournament:newTournament");
  }
});

app.directive("gracket", function () {
  return {
    restrict: "E",
    template: "<div></div>",
    scope: {
      bracket: "="
    },
    link: function (scope, element) {
      var $element = $(element).find("div");
      $element.gracket({
        src: scope.bracket
      });
    }
  }
});