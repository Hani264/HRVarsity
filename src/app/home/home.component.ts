import { Blog } from 'src/app/model/blog';
import { Courses } from './../model/courses';
import { CommonService } from './../services/common.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  courses: Courses[];

  blogs : Blog[];

  constructor(private commonServices: CommonService) { }

  ngOnInit() {
       
    this.getCourses();
    this.getBlogs();

    
    
  }

  ngAfterViewInit(){
    //scripts   
    
    setTimeout(
      ()=> {                  
        //@ts-ignore      
        this.loadScript('../assets/js/custom.js');   
      }, 1000)
    
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

  getCourses(): void{
    this.commonServices.getCourses().subscribe(
      courses => this.courses = courses.slice(0,4)
    )
  }

  getBlogs(): void{
    this.commonServices.getBlogs().subscribe(
      blogs => this.blogs = blogs.slice(1,4)
    )
  }
  

}
