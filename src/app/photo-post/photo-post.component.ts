import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'app-photo-post-component',
  templateUrl: './photo-post.component.html',
})
export class PhotoPostComponent {
  @Input() photoPost: PhotoPost;
  @Output() liked = new EventEmitter<boolean>();

  onLiked() {
    this.liked.emit(!this.photoPost.liked);
  }
}
