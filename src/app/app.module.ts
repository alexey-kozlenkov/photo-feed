import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoPostComponent,
    PhotoPostFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
