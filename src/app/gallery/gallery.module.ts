import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  {path:"", component: GalleryComponent}
]

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class GalleryModule { }
