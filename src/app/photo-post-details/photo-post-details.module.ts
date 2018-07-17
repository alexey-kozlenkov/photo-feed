import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoPostDetailsComponent } from './photo-post-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PhotoPostDetailsComponent
  ],
  exports: [],
  providers: [],
})
export class PhotoPostDetailsModule { }
