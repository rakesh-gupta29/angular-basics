import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from '../screens/contact-list/contact-list.component';
import { CreateContactComponent } from '../screens/create-contact/create-contact.component';
import { ContactDescriptionComponent } from '../screens/contact-description/contact-description.component';
import { LoginComponent } from '../screens/login/login.component';
import { SignupComponent } from '../screens/signup/signup.component';
import { ErrorComponent } from '../screens/error/error.component';
import { DashboardComponent } from '../screens/dashboard/dashboard.component';

import { ProfileComponent } from '../components/profile/profile.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { EditPasswordComponent } from '../components/edit-password/edit-password.component';

import { AuthGuardService } from '../services/authGuard/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDescriptionComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'me',

    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'edit-password', component: EditPasswordComponent },
    ],
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // import the module and configure it
  exports: [RouterModule],
})
export class AppRouteModule {}
