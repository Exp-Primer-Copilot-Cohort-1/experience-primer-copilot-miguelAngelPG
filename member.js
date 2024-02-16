function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/member/skills.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.showSkills = false;
      scope.toggleSkills = function() {
        scope.showSkills = !scope.showSkills;
      };
    }
  };
}