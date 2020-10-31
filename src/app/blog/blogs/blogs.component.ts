import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs : Blog[];

  constructor(
    private commonServices: CommonService    
    ) { }

  ngOnInit() {
    this.getBlogs();    
  }

  getBlogs(): void{
    this.commonServices.getBlogs().subscribe(
      blogs => this.blogs = blogs
    )
  }

 
}
