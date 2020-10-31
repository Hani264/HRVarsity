import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"courses", loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {path: "gallery", loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)},
  {path: "blog", loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
