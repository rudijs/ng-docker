'use strict';

import 'angular';
import 'angular-ui-router';
// import 'angular-messages.min.js';
if (ON_TEST) {
  require('angular-mocks');
}

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material/angular-material.min.css';

import 'ng-redux';
import * as thunk from 'redux-thunk';
import rootReducer from './reducers';

import 'angulartics';
// import 'angulartics/src/angulartics-debug';
import 'angulartics-google-analytics';

const ngModule: ng.IModule = angular.module('app', [
  'ui.router',
  'ngMaterial',
  'ngRedux',
  'angulartics',
  // 'angulartics.debug',
  'angulartics.google.analytics'
]);

ngModule.config(['$locationProvider', ($locationProvider: ng.ILocationProvider) => {
  $locationProvider.html5Mode(true);
}]);

ngModule.config(['$mdThemingProvider', ($mdThemingProvider: angular.material.IThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-green');
}]);

ngModule.config(['$ngReduxProvider', ($ngReduxProvider: ngRedux.INgReduxProvider) => {
  $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
}]);

ngModule.config(['$analyticsProvider', ($analyticsProvider: angulartics.IAnalyticsServiceProvider) => {
  if (window.location.href.match(/local/)) {
    $analyticsProvider.developerMode(true);
  }
}]);

import components from './common/components';
components(ngModule);

import services from './common/services';
services(ngModule);

import home from './home';
home(ngModule);

import four04 from './404';
four04(ngModule);

import about from './about';
about(ngModule);
