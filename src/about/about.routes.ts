export default (ngModule: ng.IModule) => {

  ngModule.config(($stateProvider: ng.ui.IStateProvider) => {

    $stateProvider.state('about', {
      url: '/about',
      template: require('./about.html'),
      controller: 'AboutCtrl as $ctrl'
    });

  });

}
