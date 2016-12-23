import angular from 'angular';

let module = angular.module('compileAddedTemplate', [])

.directive('compileAddedTemplate', ($compile, $parse) => {
  'ngInject';
  return {
    link: function(scope, element, attr) {
      var parsed = $parse(attr.ngBindHtml);

      function getStringValue() { return (parsed(scope) || '').toString(); }

      scope.$watch(getStringValue, function() {
        $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
      });
    }
  };
});

export default module;
