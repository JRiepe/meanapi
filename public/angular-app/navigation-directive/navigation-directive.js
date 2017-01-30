angular.module('meanapi').directive('mainNavigation', mainNavigation);

function mainNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
  };
}
