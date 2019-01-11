import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import {HttpErrorHandler} from './http-error-handler.service';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import {NotificationService} from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [
  NotificationService,
  HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
