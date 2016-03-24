import * as Rx from 'rx';

export default (ngModule: ng.IModule) => {
  // if (ON_TEST) {
  //   require('./profile.controller_spec').default(ngModule);
  // }

  class ProfileCtrl {
    profile: any;

    constructor(
      private auth: auth0.angular.IAuth0Service,
      private $http: ng.IHttpService
    ) {
      this.profile = this.auth.profile;

      // console.log(101, auth.profile);
      // console.log(201, auth.getProfile());
      Rx.Observable.fromPromise($http({
        url: 'https://api.github.com/users/rudijs',
        method: 'GET'
      })).subscribe(
        function(data: any) {
          console.log('data', data);
          // $scope.data = data;
        },
        function(err: any) {
          console.log('err', err);
          // $scope.error = err.message;
        }
        );

    }

    getProfile() {
      return this.auth.profile;
    }

  }

  ngModule.controller('ProfileCtrl', ProfileCtrl);

}
