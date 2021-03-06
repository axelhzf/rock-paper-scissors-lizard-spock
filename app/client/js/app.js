var app = angular.module("app", ["angularLocalStorage", "ngRoute"]);

app.config(function ($routeProvider) {
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