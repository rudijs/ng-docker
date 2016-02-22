export default (ngModule: ng.IModule) => {
  describe('home.controller', () => {
    // use angular.mock.module instead of module as module has meaning in commonjs
    beforeEach(angular.mock.module(ngModule.name));

    let $scope: any;

    beforeEach(() => {
      inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
        $scope = $rootScope.$new();
        $controller('HomeCtrl as $ctrl', {
          $scope: $scope
        });
      });
    });

    it('should provide scope feature title', () => {
      $scope.$ctrl.version.should.equal('1.0.0');
    });
  });
};
