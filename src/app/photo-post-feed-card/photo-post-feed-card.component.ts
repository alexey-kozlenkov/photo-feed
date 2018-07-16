import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'pf-post-feed-card',
  templateUrl: './photo-post-feed-card.component.html',
  styleUrls: ['./photo-post-feed-card.component.css']
})
export class PhotoPostFeedCardComponent {
  @Input() photoPost: PhotoPost;
  @Output() liked = new EventEmitter<boolean>();

  onLiked() {
    this.liked.emit(!this.photoPost.liked);
  }
}
