import * as counterActions from './actions';

export default (ngModule: ng.IModule) => {
  if (ON_TEST) {
    require('./counter.component_spec').default(ngModule);
  }

  /**
   * Counter Controller
   */
  class CounterCtrl {
    /**
     * Counter Controller Constructor
     * @param {object} $ngRedux Dependency Inject the ng redux module
     * @param {object} $scope DI component scope
     */
    constructor($ngRedux: any, $scope: any) {
      const unsubscribe = $ngRedux.connect(
        this.mapStateToThis,
        counterActions)(this);

      $scope.$on('$destroy', unsubscribe);
    }

    /**
     * Which part of the Redux global state does our component want to receive?
     * @param {object} state Redux state tree
     * @return {object} The part of the Redux state tree
     */
    mapStateToThis(state: any) {
      return {
        value: state.counter
      };
    }
  }

  ngModule.component('appCounter', {
    template: require('./counter.html'),
    controller: CounterCtrl
  });
};
