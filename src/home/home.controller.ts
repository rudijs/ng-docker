export default (ngModule: ng.IModule) => {
  if (ON_TEST) {
    require('./home.controller_spec').default(ngModule);
  }

  class HomeCtrl {
    version: string = '1.2.3';
  }

  ngModule.controller('HomeCtrl', HomeCtrl);

}
