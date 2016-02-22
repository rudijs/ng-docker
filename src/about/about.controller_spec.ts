export default (ngModule: ng.IModule) => {
  describe('about.controller', () => {
    // use angular.mock.module instead of module as module has meaning in commonjs
    beforeEach(angular.mock.module(ngModule.name));

    let $scope: any;

    beforeEach(() => {
      inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
        $scope = $rootScope.$new();
        $controller('AboutCtrl as $ctrl', {
          $scope: $scope
        });
      });
    });

    it('should return an email address', () => {
      $scope.$ctrl.email().should.equal('test@email.com');
    });
  });
};
