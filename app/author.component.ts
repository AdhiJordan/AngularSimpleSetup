import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
@Component({
	selector: 'authors',
	template: `
				<h2>List of autors</h2>
				{{ title }}
				<ul>
					<li *ngFor="#authorName of addAuthor">
					{{ authorName }}
					</li>
				</ul>
				`,
				providers: [AuthorService]
})

export class AuthorComponent {
	title= "Some author name listed below";
	addAuthor;
	constructor(sampleAuthor: AuthorService) {
		this.addAuthor = sampleAuthor.getAuthorDetails();

	}
	
}