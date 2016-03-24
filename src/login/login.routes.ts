export default (ngModule: ng.IModule) => {

  ngModule.config(($stateProvider: ng.ui.IStateProvider) => {

    $stateProvider.state('login', {
      url: '/login',
      template: require('./login.html'),
      controller: 'LoginCtrl as $ctrl',
      data: { noAuth: true }
    });

  });

}
