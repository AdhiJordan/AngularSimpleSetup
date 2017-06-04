import {Component} from 'angular2/core';
import {TestContactComponent} from './SubscriptionForm/testcontactform.component'
@Component({
    selector: 'my-app',
    template: `<testcontact></testcontact>`,

    directives: [TestContactComponent],

})
export class AppComponent { 

}