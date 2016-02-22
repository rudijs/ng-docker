export default (ngModule: ng.IModule) => {

    class TopNavCtrl {

    constructor(private $mdSidenav: ng.material.ISidenavService) { }

    toggle() {
      this.$mdSidenav('left').toggle();
    }
  }

  ngModule.component('appTopNav', {
    template: require('./top-nav.html'),
    controller: TopNavCtrl
  });
};
