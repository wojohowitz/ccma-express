
var router;

router = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main',
      template: require('./views/main/index.jade')
    });
}
module.exports = angular.module('ccma').config(router);
