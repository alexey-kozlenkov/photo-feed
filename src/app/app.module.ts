import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoPostDetailsComponent } from './photo-post-details/photo-post-details.component';
import { ZoomImgDirective } from './photo-post-feed-card/img-zoom.directive';
import { PhotoPostFeedCardComponent } from './photo-post-feed-card/photo-post-feed-card.component';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoPostFeedCardComponent,
    PhotoPostFeedComponent,
    ZoomImgDirective,

    PhotoPostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
