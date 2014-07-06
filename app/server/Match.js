var _ = require("underscore");

var ROCK = "rock";
var SCISSORS = "scissors";
var PAPER = "paper";

function Match (user1, user2) {
  this.id = _.uniqueId("match_");
  this.user1 = user1;
  this.user2 = user2;
  this.user1.socket.activeMatch = this;
  this.user2.socket.activeMatch = this;
}

Match.prototype = {
  userPlay: function (user, play) {
    if (user === this.user1 && !this.play1) {
      this.play1 = play;
    } else if (user === this.user2 && !this.play2) {
      this.play2 = play;
    }
  },
  isEnded: function () {
    return this.play1 && this.play2;
  },
  calculateWinner: function () {
    if (this.play1 === this.play2) {
      //no winner
    } else if ((this.play1 === ROCK && this.play2 === SCISSORS) ||
      (this.play1 === SCISSORS && this.play2 === PAPER) ||
      (this.play2 === PAPER && this.play2 === ROCK)
      ) {
      this.winner = this.user1;
    } else {
      this.winner = this.user2;
    }
  },
  reset: function () {
    this.play1 = null;
    this.play2 = null;
  }
}

module.exports = Match;