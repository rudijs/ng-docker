import ctrl from './login.controller';
import routes from './login.routes';

export default (ngModule: ng.IModule) => {
  ctrl(ngModule);
  routes(ngModule);
};
