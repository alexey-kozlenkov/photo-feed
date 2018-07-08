import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'app-photo-post-feed',
  templateUrl: './photo-post-feed.component.html',
  styleUrls: ['./photo-post-feed.component.css']
})
export class PhotoPostFeedComponent {
  @Input() posts: PhotoPost[];
  @Output() postLiked = new EventEmitter<{ id: number, liked: boolean }>();

  onPostLiked(liked: boolean, id: number) {
    this.postLiked.emit({ id, liked });
  }
}
