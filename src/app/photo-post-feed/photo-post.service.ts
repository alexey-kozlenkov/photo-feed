import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PhotoPostService {

  constructor(private httpClient: HttpClient) {

  }

  loadPosts() {
    return this.httpClient.get<PhotoPost[]>(
      'http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts'
    );
  }

  likePost(id: number, liked: boolean) {
    return this.httpClient.patch<PhotoPost>(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts/${id}`,
      { liked }
    );
  }

}
