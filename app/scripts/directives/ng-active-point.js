'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:ngActivePoint
 * @description
 * # ngActivePoint
 */
angular.module('portfolioApp')
  .directive('ngActivePoint', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var $navbar         = $('.navbar-inner'),
            colors          = ['red', 'purple', 'green', 'blue', 'orange'],
            scrollElement, elementPosition, $scrollElement;

        function setActiveElement() {
          Array.prototype.forEach.call(element.parent().parent()[0].children, function (child) {
            child.classList.remove('active');

            angular.element(child.children.item(0)).removeClass(colors.join(' '));
          });

          element.parent().addClass('active');
          element.addClass(attrs.ngActivePoint);

          $navbar.removeClass(colors.join(' '));
          $navbar.addClass(attrs.ngActivePoint);
        }

        function scrollToElement() {
          scrollElement   = angular.element('.js_scroll-' + attrs.ngActivePoint),
          $scrollElement  = $(scrollElement[0]);

          $("html, body").animate({
            scrollTop: $scrollElement.offset().top - $navbar.height() - 10
          }, 200);
        }

        if (element.parent()[0].classList.contains('active')) {
          setActiveElement();
        }

        element[0].addEventListener('click', function () {
          setActiveElement();
          scrollToElement();
        });

        window.addEventListener('scroll', _.debounce(function (e) {
          scrollElement   = angular.element('.js_scroll-' + attrs.ngActivePoint),
          elementPosition = scrollElement[0].getBoundingClientRect();

          if (elementPosition.top <= $navbar.height() && (elementPosition.top * -1) <= elementPosition.height) {
            setActiveElement();
          } else if (attrs.ngActivePoint === 'blue' && window.scrollY === 0) {
            setActiveElement();
          }
        }, 300));
      }
    };
  });
