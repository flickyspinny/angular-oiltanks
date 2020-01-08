
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id: 1, name: "Kingspan ESB2500"},
    {id: 2, name: "Harlequin HQI 1800"},
    {id: 3, name: "Deso 1500LP"}
  ];

  onAdd() {
    this.courses.push({id: 4, name: "course4"});
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: "Kingspan ESB2500"},
      {id: 2, name: "Harlequin HQI 1800"},
      {id: 3, name: "Deso 1500LP"}
    ];
  }

  trackCourse(index, course) {
      return course ? course.id: undefined;
  }

  onChange($event) {
    console.log($event);
  }

}