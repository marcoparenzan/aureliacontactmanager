import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';

export class App {
  router: Router;
  
  constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Menù';
    config.map([
     { route: '',      moduleId: 'menu/list',   name: 'list' }
    ]);

    this.router = router;
  }
}