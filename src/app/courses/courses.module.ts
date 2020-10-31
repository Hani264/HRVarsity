import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { MatButtonModule } from '@angular/material';


const routes: Routes = [
  {path:"", component: CoursesComponent, children: [
    {path:"", component: CourseComponent},
    {path:"", redirectTo:"/courses", pathMatch:"full"},
    {path:"courseDetails/:id", component: CourseDetailsComponent}
  ]}
]



@NgModule({
  declarations: [CoursesComponent, CourseDetailsComponent, CourseComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
