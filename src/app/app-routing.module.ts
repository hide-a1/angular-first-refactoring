import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './view/user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
