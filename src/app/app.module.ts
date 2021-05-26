import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainscheduleComponent } from './trainschedule/trainschedule.component';
import { TicketpricesComponent } from './ticketprices/ticketprices.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BookticketComponent } from './bookticket/bookticket.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes} from './routes';

import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard} from './auth/auth.guard'
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ParticularstationComponent } from './particularstation/particularstation.component';
import { AdminComponent } from './admin/admin.component';
//import { UserProfileComponent } from './user-profile/user-profile.component';






@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
    TrainscheduleComponent,
    TicketpricesComponent,
    HomeComponent,
    HeaderComponent,
    BookticketComponent,
    FooterComponent,
    PaymentComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    ParticularstationComponent,
    AdminComponent
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
