export default (ngModule: ng.IModule) => {

  ngModule.config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('404', {
      url: '/404',
      template: require('./404.html'),
      data: {noAuth: true}
    });

  });

}
