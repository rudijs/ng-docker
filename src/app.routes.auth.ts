export default (ngModule: ng.IModule) => {

  ngModule.run((
    $rootScope: ng.IRootScopeService,
    $state: ng.ui.IStateService,
    auth: auth0.angular.IAuth0Service,
    store: angular.a0.storage.IStoreService,
    jwtHelper: angular.jwt.IJwtHelper
  ) => {

    $rootScope.$on('$stateChangeStart', (event: ng.IAngularEvent, toState: ng.ui.IState) => {
      if (isAuthRequired(toState)) {
        console.log('auth.isAuthenticated', auth.isAuthenticated);
        if (!auth.isAuthenticated) {
          event.preventDefault(); // stop current execution
          $state.go('login'); // go to login
        }
      }
    });

    // is authentication required for this route
    function isAuthRequired(toState: ng.ui.IState): boolean {
      return (toState.data && toState.data.noAuth) ? false : true;
    }

    // Keep the user logged in after a page refresh
    // This events gets triggered on refresh or URL change
    $rootScope.$on('$locationChangeStart', () => {
      const token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (!auth.isAuthenticated) {
            auth.authenticate(store.get('profile'), token)
          }
        } else {
          $state.go('home');
        }
      }

    });

  });

}
