import { Component } from '@angular/core';
import { PhotoPost } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post: PhotoPost = {
    title: 'Post 1',
    description: 'Much post',
    photoUrl: 'https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif',
    createdAt: 0,
    author: 'John Doe',
    liked: false,
  };

  onPostLiked(liked: boolean) {
    console.log(liked);
    this.post.liked = liked;
  }
}
