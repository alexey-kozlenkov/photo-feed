import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photo-post',
  templateUrl: './photo-post.component.html'
})
export class PhotoPostComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() like: boolean;

  @Output() likeChange = new EventEmitter<boolean>();

  rates = [0, 1, 2, 3, 4, 5];

  onLike() {
    this.likeChange.emit(!this.like);
  }

}
