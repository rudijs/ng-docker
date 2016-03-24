export default (ngModule: ng.IModule) => {
  // if (ON_TEST) {
  //   require('./profile.controller_spec').default(ngModule);
  // }

  class LoginCtrl {
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

  ngModule.controller('LoginCtrl', LoginCtrl);


}
