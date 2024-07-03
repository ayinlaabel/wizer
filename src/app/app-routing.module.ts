import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
