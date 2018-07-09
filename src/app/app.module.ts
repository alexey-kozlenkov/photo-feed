import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoomImgDirective } from './photo-post/img-zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotoPostComponent,
    PhotoPostFeedComponent,
    ZoomImgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
