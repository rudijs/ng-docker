'use strict';

import 'angular';
import 'angular-ui-router';
// import 'angular-messages.min.js';
if (ON_TEST) {
  require('angular-mocks');
}
import 'angular-cookies';
import 'angular-jwt';
import 'angular-storage';

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

// Auth0 Lock script and AngularJS module
import './vendor/lock-8.2.min';
import './vendor/auth0-angular-4';

const ngModule: ng.IModule = angular.module('app', [
  'ui.router',
  'ngMaterial',
  'ngRedux',
  'angulartics',
  // 'angulartics.debug',
  'angulartics.google.analytics',

  'auth0',
  'angular-storage',
  'angular-jwt'
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

ngModule.config(['authProvider', (authProvider: any) => {
  authProvider.init({
    domain: 'rudijs.auth0.com',
    clientID: 'ZUzUEfzQ71YIwbgyOcEJZZW3ruOL68Xs'
  });
}])
  .run((auth: any) => {
    // This hooks al auth events to check everything as soon as the app starts
    auth.hookEvents();
  });

import routesAuthPolicy from './app.routes.auth';
routesAuthPolicy(ngModule);

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

import profile from './profile';
profile(ngModule);

import login from './login';
login(ngModule);
