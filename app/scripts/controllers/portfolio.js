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
    $scope.currentDate = new Date();
  });
