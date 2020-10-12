import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './access/login/login.component';
import { DragonCreateComponent } from './dragons/dragon-create/dragon-create.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragons/dragon-details/dragon-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragonEditComponent } from './dragons/dragon-edit/dragon-edit.component';
import { DragonResolve } from './services/dragon.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AccessGuard } from './access/login/services/access.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonCreateComponent,
    DragonListComponent,
    DragonDetailsComponent,
    DragonEditComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    DragonResolve,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
