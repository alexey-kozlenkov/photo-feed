import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ZoomImgDirective } from './photo-post-card/img-zoom.directive';
import { PhotoPostCardComponent } from './photo-post-card/photo-post-card.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { PhotoPostReactiveFormComponent } from './photo-post-form/reactive/photo-post-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoPostCardComponent,
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
