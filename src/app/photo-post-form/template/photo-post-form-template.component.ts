import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from '../../types';
import { switchMapTo } from 'rxjs/operators';


@Component({
  selector: 'pf-photo-post-form-template',
  templateUrl: './photo-post-form-template.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class PhotoPostTemplateFormComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

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
