export default (ngModule: ng.IModule) => {

  ngModule.config(($stateProvider: ng.ui.IStateProvider) => {

    $stateProvider.state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeCtrl as $ctrl',
      data: {noAuth: true}
    });

  });

}
