import {Aurelia} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(Aurelia, EventAggregator)
export class List {
  constructor(private aurelia:Aurelia, ea: EventAggregator) {
  }

  contacts() {
    this.aurelia.setRoot("contacts/app");
  }
}