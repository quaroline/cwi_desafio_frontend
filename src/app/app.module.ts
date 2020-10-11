import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './acesso/login/login.component';
import { DragonCreateComponent } from './dragons/dragon-create/dragon-create.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonDeleteComponent } from './dragons/dragon-delete/dragon-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonCreateComponent,
    DragonListComponent,
    DragonDetailsComponent,
    DragonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
