'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:ngLink
 * @description
 * # ngLink
 */
angular.module('portfolioApp')
  .directive('ngLink', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element[0].addEventListener('click', function () {
          window.open(attrs.ngLink);
        });
      }
    };
  });
