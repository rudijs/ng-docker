import ctrl from './home.controller';
import routes from './home.routes';
import './home.styl';
import './home-animations.styl';

export default (ngModule: ng.IModule) => {
  ctrl(ngModule);
  routes(ngModule);
};
