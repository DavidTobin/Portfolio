'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('PortfolioCtrl', function ($scope) {
    var Controller = {
      defaults: {
        showPrintDialog: document.querySelector('html').classList.contains('chrome')
      },

      init: function () {
        _.each(this.API, function (func, name) {
          $scope[name] = func;
        });

        _.each(this.defaults, function (variable, name) {
          $scope[name] = variable;
        });
      },

      API: {
        openPrintDialog: function () {
          window.print();
        }
      }
    };

    Controller.init();
  });
