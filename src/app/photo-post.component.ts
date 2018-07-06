import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-post-component',
  templateUrl: './photo-post.component.html',
})
export class PhotoPostComponent {
  gifSrc = 'https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif';

  @Input() photoPost;
  @Output() liked = new EventEmitter<boolean>();

  onLiked() {
    this.liked.emit(!this.photoPost.liked);
  }
}
