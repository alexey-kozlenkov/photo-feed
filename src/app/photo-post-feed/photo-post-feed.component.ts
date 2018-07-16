import { Component, OnInit } from '@angular/core';
import { PhotoPost } from '../types';
import { PhotoPostService } from './photo-post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pf-feed',
  templateUrl: './photo-post-feed.component.html',
  styleUrls: ['./photo-post-feed.component.css']
})
export class PhotoPostFeedComponent {

  posts: Observable<PhotoPost[]>;

  constructor(private postsService: PhotoPostService) {
    this.posts = postsService.getPosts();
  }

  onPostLiked(liked: boolean, id: number) {
    this.postsService.likePost(id, liked).subscribe();
  }
}
