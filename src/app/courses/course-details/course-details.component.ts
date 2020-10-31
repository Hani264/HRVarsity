import { CommonService } from './../../services/common.service';
import { Courses } from './../../model/courses';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: Courses[];

  courses: Courses[]

  constructor(
    private commonServices: CommonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCourseDetails();
    this.getCourses();

    jQuery(window).scrollTop(0);
    setTimeout(
      ()=>{
        this.loadScript('../assets/js/custom.js'); 
      }, 1000
    )
  }


  getCourseDetails(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.commonServices.getCourseDetails(id).subscribe(
      course => this.course = course
    )
  }

  getCourses(): void{
    this.commonServices.getCourses().subscribe(
      courses => this.courses = courses
    )
  }


  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
