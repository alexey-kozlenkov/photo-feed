import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoPost } from '../../types';
import { switchMapTo } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'pf-photo-post-form-reactive',
  templateUrl: './photo-post-form-reactive.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class PhotoPostReactiveFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: '',
      photoUrl: '',
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const data: Partial<PhotoPost> = this.form.value;
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
