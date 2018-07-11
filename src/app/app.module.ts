import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { ZoomImgDirective } from './photo-post-card/img-zoom.directive';
import { PhotoPostCardComponent } from './photo-post-card/photo-post-card.component';
import { PhotoPostTemplateFormComponent } from './photo-post-form/template/photo-post-form-template.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PhotoPostCardComponent,
    PhotoPostFeedComponent,
    ZoomImgDirective,

    PhotoPostTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
