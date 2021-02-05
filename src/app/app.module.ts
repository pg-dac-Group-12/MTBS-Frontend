import "zone.js" ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptorService } from './services/HttpInterceptorService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheatreWorkflowModule } from './theatre-workflow/theatre-workflow.module';
import { UserWorkflowModule } from './user-workflow/user-workflow.module';
import { SharedModule } from "./shared/shared.module";
import { SeatMapComponent } from "./components/seat-map/seat-map.component";
import { JwtInterceptor } from "src/JwtInterceptor";
import { DeleteAudiComponent } from "./theatre-workflow/delete-audi/delete-audi.component";
import { AddShowComponent } from "./theatre-workflow/add-show/add-show.component";
import { CancelShowComponent } from "./theatre-workflow/cancel-show/cancel-show.component";
import { TicketPageComponent } from "./user-workflow/ticket-page/ticket-page.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    TheatreRegisterComponent,
    SeatMapComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    UserWorkflowModule,
    TheatreWorkflowModule,
    ToastrModule.forRoot(),
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[
    LoginComponent,
    DeleteAudiComponent,
    SeatMapComponent,
    UserRegisterComponent,
    TheatreRegisterComponent,
    AddShowComponent,
    CancelShowComponent,
    TicketPageComponent
  ]
})
export class AppModule { }
