import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'like' })
export class LikePipe implements PipeTransform {
  transform(like: boolean): string {
    return like ? '❤️' : '💔';
  }
}
