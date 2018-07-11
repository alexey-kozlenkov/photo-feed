import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'pf-post-card',
  templateUrl: './photo-post-card.component.html',
  styleUrls: ['./photo-post-card.component.css']
})
export class PhotoPostCardComponent {
  @Input() photoPost: PhotoPost;
  @Output() liked = new EventEmitter<boolean>();

  onLiked() {
    this.liked.emit(!this.photoPost.liked);
  }
}
