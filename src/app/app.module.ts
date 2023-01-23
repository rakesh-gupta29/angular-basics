import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardOptionsComponent } from './components/dashboard-options/dashboard-options.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppInfoComponent } from './components/app-info/app-info.component';
import { BlogEditComponent } from './screens/blog-edit/blog-edit.component';
import { BlogCreateComponent } from './screens/blog-create/blog-create.component';
import { DefaultProfileComponent } from './components/default-profile/default-profile.component';
import { WarningModal } from './services/warningModal/warning-modal';
import { WarningModalComponent } from './components/warning-modal/warning-modal.component';

import { appConfig } from './firebase';
import { Teams } from './services/teams/teams';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardOptionsComponent,
    ProfileComponent,
    BlogsComponent,
    TeamsComponent,
    ResourcesComponent,
    CareersComponent,
    ContactsComponent,
    AppInfoComponent,
    BlogEditComponent,
    BlogCreateComponent,
    DefaultProfileComponent,
    WarningModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(appConfig),
  ],
  providers: [WarningModal, Teams],
  bootstrap: [AppComponent],
})
export class AppModule {}
