import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoPostDetailsModule } from './photo-post-details/photo-post-details.module';
import { PhotoPostFeedModule } from './photo-post-feed/photo-post-feed.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PhotoPostFeedModule,
    PhotoPostDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
