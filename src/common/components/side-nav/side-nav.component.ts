export default (ngModule: ng.IModule) => {
  // if (ON_TEST) {
  //   require('./side_nav.directive_spec').default(ngModule);
  // }

  class SideNavCtrl {

    constructor(private $mdSidenav: ng.material.ISidenavService) { }

    toggle() {
      this.$mdSidenav('left').toggle();
    }
  }

  ngModule.component('appSideNav', {
    template: require('./side-nav.html'),
    controller: SideNavCtrl
  });
};
