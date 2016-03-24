import ctrl from './profile.controller';
import routes from './profile.routes';

export default (ngModule: ng.IModule) => {
  ctrl(ngModule);
  routes(ngModule);
};
