import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from '../types';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'pf-photo-post-details',
  templateUrl: './photo-post-details.component.html',
  styleUrls: ['./photo-post-details.component.scss']
})
export class PhotoPostDetailsComponent implements OnInit {

  action: 'ADD' | 'EDIT';
  post: Partial<PhotoPost> = {};

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.action = this.activatedRoute.snapshot.data['action'];

    const id = this.activatedRoute.snapshot.params.id;
    this.httpClient.get<PhotoPost>(`http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts/${id}`).pipe(
      filter(() => this.action === 'EDIT')
    ).subscribe(post => this.post = post);
  }

  ngOnInit(): void { }

  onSubmit(data: Partial<PhotoPost>) {
    this.httpClient.post(
      `http://my-json-server.typicode.com/alexey-kozlenkov/photo-feed/posts`,
      {
        ...data,
        liked: false,
        author: 'John Doe',
        createdAt: Date.now()
      }
    ).subscribe(console.log);
  }
}
