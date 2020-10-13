import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { AccessGuard } from './access/login/services/access.guard';
import { DragonCreateComponent } from './dragons/dragon-create/dragon-create.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonEditComponent } from './dragons/dragon-edit/dragon-edit.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonResolve } from './services/dragon.resolver';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DragonListComponent, canActivate: [AccessGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: DragonCreateComponent, canActivate: [AccessGuard] },
  { path: 'details/:id', component: DragonDetailsComponent, resolve: { dragon: DragonResolve }, canActivate: [AccessGuard] },
  { path: 'edit/:id', component: DragonEditComponent, resolve: { dragon: DragonResolve }, canActivate: [AccessGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
