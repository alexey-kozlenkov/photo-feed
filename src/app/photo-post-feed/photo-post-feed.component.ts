import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoPost } from '../types';

@Component({
  selector: 'pf-feed',
  templateUrl: './photo-post-feed.component.html',
  styleUrls: ['./photo-post-feed.component.css']
})
export class PhotoPostFeedComponent implements OnInit {

  posts: PhotoPost[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<PhotoPost[]>(
      'http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts'
    ).subscribe(posts => this.posts = posts);
  }

  onPostLiked(liked: boolean, id: number) {
    this.httpClient.patch<PhotoPost>(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts/${id}`,
      { liked }
    ).subscribe((updatedPost) => {
      this.posts = this.posts.map(post => post.id === id ? updatedPost : post);
    });
  }
}
