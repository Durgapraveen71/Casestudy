
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';

import { TrainscheduleComponent } from './trainschedule/trainschedule.component';
import { TicketpricesComponent } from './ticketprices/ticketprices.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {RegistrationComponent} from './registration/registration.component'
import { LoginComponent } from './login/login.component'
import {HomeComponent} from './home/home.component'
import {HeaderComponent} from './header/header.component'
import {BookticketComponent} from './bookticket/bookticket.component'
import { PaymentComponent} from './payment/payment.component'
import {ParticularstationComponent} from './particularstation/particularstation.component'
import { appRoutes} from './routes'



const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'ticketprices',
    component: TicketpricesComponent
  },
  {
    path: 'trainschedule',
    component: TrainscheduleComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'bookticket',
    component: BookticketComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'particularstation',
    component: ParticularstationComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
