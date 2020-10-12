import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './access/login/login.component';
import { DragonCreateComponent } from './dragons/dragon-create/dragon-create.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { DragonDeleteComponent } from './dragons/dragon-delete/dragon-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragonEditComponent } from './dragons/dragon-edit/dragon-edit.component';
import { DragonResolve } from './services/dragon.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonCreateComponent,
    DragonListComponent,
    DragonDetailsComponent,
    DragonDeleteComponent,
    DragonEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DragonResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
