import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoPostService } from '../photo-post-feed/photo-post.service';
import { PhotoPost } from '../types';


@Component({
  selector: 'pf-photo-post-details',
  templateUrl: './photo-post-details.component.html',
  styleUrls: ['./photo-post-details.component.scss']
})
export class PhotoPostDetailsComponent implements OnInit {

  action: 'ADD' | 'EDIT';
  post: Partial<PhotoPost> = {};

  constructor(
    private postsService: PhotoPostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.action = this.activatedRoute.snapshot.data['action'];

    if (this.action === 'EDIT') {
      const id = this.activatedRoute.snapshot.params.id;
      this.postsService.loadPost(id).subscribe(post => this.post = post);
    }
  }

  ngOnInit(): void { }

  onSubmit(data: Partial<PhotoPost>) {
    const action$ = this.action === 'EDIT'
      ? this.postsService.updatePost(data, this.post.id)
      : this.postsService.addPost(data);

    action$.subscribe({
      complete: () => this.router.navigate([''])
    });
  }
}
