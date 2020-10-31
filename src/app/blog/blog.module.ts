import { NgxPaginationModule } from 'ngx-pagination';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogComponent, BlogsComponent, BlogDetailsComponent],
  imports: [
    CommonModule   ,
    BlogRoutingModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
      BlogComponent
  ]
})
export class BlogModule { }
