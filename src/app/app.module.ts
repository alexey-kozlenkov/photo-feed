import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoPostComponent } from './photo-post.component';
import { LikePipe } from './like.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoPostComponent,
    LikePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
