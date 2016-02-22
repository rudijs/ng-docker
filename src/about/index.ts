import ctrl from './about.controller';
import routes from './about.routes';

export default (ngModule: ng.IModule) => {
  ctrl(ngModule);
  routes(ngModule);
};
