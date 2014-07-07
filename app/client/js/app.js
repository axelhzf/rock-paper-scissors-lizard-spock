var app = angular.module("app", ["angularLocalStorage", "ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/name", {
    templateUrl: "templates/name.html",
    controller: "NameController"
  }).when("/tournaments", {
    templateUrl: "templates/tournaments.html",
    controller: "TournamentsController"
  }).when("/tournament/wait", {
    templateUrl: "templates/tournament-wait.html"
  }).when("/tournament/chart", {
    templateUrl: "templates/tournament-chart.html",
    controller: "ChartController"
  }).when("/match", {
    templateUrl: "templates/match.html",
    controller: "MatchController"
  }).when("/tournament/winner", {
    templateUrl: "templates/tournament-winner.html",
    controller: "WinnerController"
  })
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