export default (ngModule: ng.IModule) => {
  if (ON_TEST) {
    require('./home.controller_spec').default(ngModule);
  }

  class HomeCtrl {
    version: string = '1.0.0';

    constructor(
      private $scope: any,
      private $http: any,
      private auth: any,
      private store: any,
      private $location: any) { }

    login() {
      this.auth.signin({}, (profile: any, token: any) => {
        // Success callback
        console.log('profile', profile);
        this.store.set('profile', profile);
        this.store.set('token', token);
        this.$location.path('/profile');
      }, function(err: any) {
        // Error callback
        console.log("There was an error logging in", err);
      });
    }

    logout() {
      this.auth.signout();
      this.store.remove('profile');
      this.store.remove('token');
    }

    isAuthenticated() {
      return this.auth.isAuthenticated;
    }


  }

  ngModule.controller('HomeCtrl', HomeCtrl);

}
