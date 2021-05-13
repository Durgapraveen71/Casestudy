import { Routes } from '@angular/router';
import { SignUpComponent} from './user/sign-up/sign-up.component';
import {UserComponent } from './user/user.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'signin', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];