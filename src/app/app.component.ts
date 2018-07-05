import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Fed #nitro #3000';

  photoPost = {
    title: 'Post 1',
    description: '🐋❤️',
    liked: false
  };
}
