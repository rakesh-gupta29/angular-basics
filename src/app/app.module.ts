import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactCardComponent } from './components/contacts/contact-card/contact-card.component';
import { ContactListComponent } from './screens/contact-list/contact-list.component';
import { CreateContactComponent } from './screens/create-contact/create-contact.component';
import { ContactFilterComponent } from './components/contacts/contact-filter/contact-filter.component';
import { ContactDescriptionComponent } from './screens/contact-description/contact-description.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { ErrorComponent } from './screens/error/error.component';
import { environment } from 'src/environments/environment';
import { AppRouteModule } from './utils/app.routing.module';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { AuthServiceService } from './services/authService/auth-service.service';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { DashboardOptionsComponent } from './components/dashboard-options/dashboard-options.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactCardComponent,
    ContactListComponent,
    CreateContactComponent,
    ContactFilterComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    DashboardOptionsComponent,
    EditPasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthGuardService, AuthServiceService], //  register all services
  bootstrap: [AppComponent],
})
export class AppModule {}
