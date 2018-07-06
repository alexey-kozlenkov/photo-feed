import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'Post 1',
    description: 'Much post',
    liked: false,
  };

  onPostLiked(liked: boolean) {
    console.log(liked);
    this.post.liked = liked;
  }
}
