import { Component, OnInit } from '@angular/core';
import { PhotoPost } from '../types';
import { PhotoPostService } from './photo-post.service';

@Component({
  selector: 'pf-feed',
  templateUrl: './photo-post-feed.component.html',
  styleUrls: ['./photo-post-feed.component.css']
})
export class PhotoPostFeedComponent implements OnInit {

  posts: PhotoPost[];

  constructor(private postsService: PhotoPostService) {
  }

  ngOnInit(): void {
    this.postsService.loadPosts().subscribe(
      posts => this.posts = posts
    );
  }

  onPostLiked(liked: boolean, id: number) {
    this.postsService.likePost(id, liked).subscribe(
      (updatedPost) => this.posts = this.posts.map(post => post.id === id ? updatedPost : post)
    );
  }
}
