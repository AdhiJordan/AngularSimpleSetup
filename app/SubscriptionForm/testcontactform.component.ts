import {Component} from 'angular2/core'

@Component ({
	selector: 'testcontact',
	templateUrl: 'app/SubscriptionForm/testcontactform.component.html'
})

export class TestContactComponent {
	    frequencies = [
   
     { id: 1, label: 'Daily' }, 
    
    { id: 2, label: 'Weekly' },
    
    { id: 3, label: 'Monthly' }
    ];
sendForm(form) {
	alert('valid email');
	console.log(form.value);
}
}