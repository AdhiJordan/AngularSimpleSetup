import {Component} from 'angular2/core'

@Component({
	selector: 'contact-form',
	templateUrl: 'app/SubscriptionForm/contactform.component.html'

})

export class ContactFormComponent {
onSubmit(form) {
	console.log(form);
}
}