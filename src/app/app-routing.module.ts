import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonCreateComponent } from './dragons/dragon-create/dragon-create.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonEditComponent } from './dragons/dragon-edit/dragon-edit.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonResolve } from './services/dragon.resolver';

const routes: Routes = [
  { path: '', component: DragonListComponent },
  { path: 'create', component: DragonCreateComponent },
  { path: 'details/:id', component: DragonDetailsComponent, resolve: { dragon: DragonResolve } },
  { path: 'edit/:id', component: DragonEditComponent, resolve: { dragon: DragonResolve } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
