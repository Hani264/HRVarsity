import { Courses } from './../model/courses';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private courseUrl: any = "https://my-json-server.typicode.com/hani264/myjson/courses"
  private blogUrl: any = "https://my-json-server.typicode.com/hani264/myjson/blogs"
  
  courses: Courses[];
  blogs : Blog[];

  
  

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>(this.courseUrl)
  }

  getCourseDetails(id : number): Observable<Courses[]>{
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Courses[]>(url)
  }

//Blogs

  getBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.blogUrl)
  }

  getBlogDetails(id: number): Observable<Blog[]>{
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog[]>(url)
  }


}
