import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  index = 0;

  title = 'Photo Fed #nitro #3000';

  omImageClick() {
    this.index += 1;
  }
}
