import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPostFeedComponent } from './photo-post-feed/photo-post-feed.component';
import { PhotoPostDetailsComponent } from './photo-post-details/photo-post-details.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PhotoPostFeedComponent
  },
  {
    path: 'posts/details',
    component: PhotoPostDetailsComponent,
    data: {
      action: 'ADD'
    }
  },
  {
    path: 'posts/details/:id',
    component: PhotoPostDetailsComponent,
    data: {
      action: 'EDIT'
    }
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
