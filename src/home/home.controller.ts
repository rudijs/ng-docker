export default (ngModule: ng.IModule) => {
  if (ON_TEST) {
    require('./home.controller_spec').default(ngModule);
  }

  class HomeCtrl {
    version: string = '1.0.0';
  }

  ngModule.controller('HomeCtrl', HomeCtrl);

}
