import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ZoomImgDirective } from './photo-post-feed-card/img-zoom.directive';
import { PhotoPostFeedCardComponent } from './photo-post-feed-card/photo-post-feed-card.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { PhotoPostReactiveFormComponent } from './photo-post-form/reactive/photo-post-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoPostFeedCardComponent,
    PhotoPostFeedComponent,
    ZoomImgDirective,

    PhotoPostReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
