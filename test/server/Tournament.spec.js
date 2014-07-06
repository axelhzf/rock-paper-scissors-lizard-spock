var expect = require("chai").expect;
var Tournament = require("../../app/server/Tournament");

describe("Tournament", function () {
  describe("start", function () {
    it("should generate the brackets", function () {
      var t = new Tournament(8);
      var user1 = {name: "user1"};
      var user2 = {name: "user2"};
      var user3 = {name: "user3"};
      var user4 = {name: "user4"};
      var user5 = {name: "user5"};
      var user6 = {name: "user6"};
      var user7 = {name: "user7"};
      var user8 = {name: "user8"};
      t.users = [user1, user2, user3, user4, user5, user6, user7, user8];
      t.start();

      expect(t.brackets).to.deep.equal([
        [
          [user1, user2],
          [user3, user4],
          [user5, user6],
          [user7, user8]
        ],
        [
          [],
          []
        ],
        [
          []
        ]
      ])
    });
  });
});