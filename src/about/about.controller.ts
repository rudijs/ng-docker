export default (ngModule: ng.IModule) => {
  if (ON_TEST) {
    require('./about.controller_spec').default(ngModule);
  }

  class AboutCtrl {
    email(): string {
      return 'test@email.com';
    }
  }

  ngModule.controller('AboutCtrl', AboutCtrl);

}
