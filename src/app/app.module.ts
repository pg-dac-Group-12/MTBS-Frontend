import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TheatreDashboardComponent } from './theatre-workflow/theatre-dashboard/theatre-dashboard.component';
import { AddAudiComponent } from './theatre-workflow/add-audi/add-audi.component';
import { DeleteAudiComponent } from './theatre-workflow/delete-audi/delete-audi.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptorService } from './services/HttpInterceptorService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TheatreDashboardComponent,
    AddAudiComponent,
    DeleteAudiComponent,
    LoginComponent,
    UserRegisterComponent,
    TheatreRegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
