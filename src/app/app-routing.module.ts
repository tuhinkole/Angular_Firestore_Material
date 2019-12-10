import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import {UserLoginComponent} from './user-login/user-login.component';

import { AdminGuard } from './core/admin.guard';
import { CanReadGuard } from './core/can-read.guard';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: 'content', component: SubscribePageComponent, canActivate: [CanReadGuard] },
  { path: 'secret', component: SuperSecretComponent, canActivate: [CanReadGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
