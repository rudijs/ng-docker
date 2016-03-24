export default (ngModule: ng.IModule) => {

  ngModule.config(($stateProvider: ng.ui.IStateProvider) => {

    $stateProvider.state('profile', {
      url: '/profile',
      template: require('./profile.html'),
      controller: 'ProfileCtrl as $ctrl'
    });

  });

}
