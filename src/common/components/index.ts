import topNav from './top-nav';
import sideNav from './side-nav';
import counter from './counter';

export default (ngModule: ng.IModule) => {
  topNav(ngModule);
  sideNav(ngModule);
  counter(ngModule);
};
