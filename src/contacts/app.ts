import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
  router: Router;
  
  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: 'contacts',      moduleId: 'contacts/list',   name: 'contacts' },
      { route: 'contacts/:id',  moduleId: 'contacts/detail', name:'contact' }
    ]);
    
     config.mapUnknownRoutes(instruction => {
       location.hash = '#/contacts';
       return 'contacts/list';
     });

    this.router = router;
  }
}