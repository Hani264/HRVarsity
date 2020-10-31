import { Courses } from './../../model/courses';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: Courses[];


  constructor(private commonServices: CommonService) { }

  ngOnInit() {
    this.getCourses();    
    
  }

  getCourses(): void{
    this.commonServices.getCourses().subscribe(
      courses => this.courses = courses
    )
  }

}
