import { Component } from '@angular/core';
import { db } from 'db';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = db.posts[0];

  onPostLiked(liked: boolean) {
    console.log(liked);
  }
}
