import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { ZoomImgDirective } from './photo-post-card/img-zoom.directive';
import { PhotoPostCardComponent } from './photo-post-card/photo-post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoPostCardComponent,
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
