import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'pf-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.css']
})
export class PhotoPostComponent {
  @Input() photoPost: PhotoPost;
  @Output() liked = new EventEmitter<boolean>();

  onLiked() {
    this.liked.emit(!this.photoPost.liked);
  }
}
