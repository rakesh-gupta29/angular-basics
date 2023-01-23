import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';

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

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'me',
    component: DashboardComponent,
    children: [
      { path: '', component: DefaultProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'team', component: TeamsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'contact', component: ContactsComponent },
      { path: 'app-info', component: AppInfoComponent },
    ],
  },
  { path: 'blog/add', component: BlogCreateComponent },
  { path: 'blog/edit/:id', component: BlogEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
