import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
  {path:"", component:BlogComponent, children:[
    {path:"" , component: BlogsComponent},
    {path: "blogDetail/:id", component: BlogDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
