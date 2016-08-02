(function() {
  'use strict';
  angular.module('app').controller('DashController', DashController);

  DashController.$inject = [ '$log', 'loginService', 'utilService' ];

  function DashController($log, loginService, utilService) {
    var logger = $log.getInstance('DashController');
    var vm = this;

    // public methods
    vm.state = state;

    // init
    state();

    function state() {
      logger.debug('state');
      loginService.state(vm);
      vm.page = utilService.getCurrentPage();
    }
  }
})();