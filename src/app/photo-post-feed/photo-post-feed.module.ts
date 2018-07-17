import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ZoomImgDirective } from '../photo-post-feed-card/img-zoom.directive';
import { PhotoPostFeedCardComponent } from '../photo-post-feed-card/photo-post-feed-card.component';
import { PhotoPostFeedComponent } from './photo-post-feed.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PhotoPostFeedComponent,
    PhotoPostFeedCardComponent,
    ZoomImgDirective,
  ],
  exports: [PhotoPostFeedComponent],
  providers: [],
})
export class PhotoPostFeedModule { }
