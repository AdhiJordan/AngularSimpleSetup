import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow-directive'
@Component({
	selector: 'courses',
	template: `
			  <h2>sample courses</h2>
			  {{ title }}
			  <input type="text" autoGrow />
			  <ul>
			  	<li *ngFor="#sample of courses">
			  	{{ sample }}
			  	</li>
			  </ul>
			<span
			class="glyphicon"
			[class.glyphicon-star-empty]="!isActive"
			 [class.glyphicon-star]="isActive"
			 (click)="onClick()">
			</span>
	          `,
	          providers: [CourseService],
	          directives: [AutoGrowDirective]
})

export class CoursesComponent {
	title= "Some courses available";
	courses;
	isActive = false;
	constructor(sampleCourse: CourseService) {
		this.courses = sampleCourse.getCourse();
	}
	onClick() {
		console.log("working now");
		this.isActive= !this.isActive;
	}

}