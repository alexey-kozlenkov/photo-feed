import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from '../types';
import { BehaviorSubject } from 'rxjs';
import { tap, withLatestFrom, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoPostService {

  private posts$: BehaviorSubject<PhotoPost[]> =  new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    this.loadPosts().subscribe();
  }

  getPosts() {
    return this.posts$;
  }

  loadPosts() {
    return this.httpClient.get<PhotoPost[]>(
      'http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts'
    ).pipe(
      tap(posts => this.posts$.next(posts))
    );
  }

  loadPost(id: number) {
    return this.httpClient.get<PhotoPost>(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts/${id}`
    );
  }

  addPost(post: Partial<PhotoPost>) {
    return this.httpClient.post<PhotoPost>(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts`,
      {
        ...post,
        liked: false,
        author: 'John Doe',
        createdAt: Date.now()
      }
    ).pipe(
      withLatestFrom(this.posts$),
      map(([newPost, posts]) => [...posts, newPost]),
      tap(posts => this.posts$.next(posts))
    );
  }

  updatePost(data: Partial<PhotoPost>, id: number) {
    return this.httpClient.patch<PhotoPost>(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts/${id}`,
      { ...data }
    ).pipe(
      withLatestFrom(this.posts$),
      map(([updatedPost, posts]) => posts.map(post => post.id === updatedPost.id ? updatedPost : post)),
      tap(posts => this.posts$.next(posts))
    );
  }

  likePost(id: number, liked: boolean) {
    return this.updatePost({ liked }, id);
  }

}
