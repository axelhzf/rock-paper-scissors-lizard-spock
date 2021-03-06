angular.module("app").directive("gracket", function () {
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