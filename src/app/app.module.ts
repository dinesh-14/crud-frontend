// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// components

// modules
import { SharedModule } from './shared/shared.module';

// services
import { UserService } from './services/user.service';
import { HeaderComponent } from './layout/header/header.component';
import { SessionManagerComponent } from './layout/session-manager/session-manager.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SessionManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
  ],
  providers: [UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
